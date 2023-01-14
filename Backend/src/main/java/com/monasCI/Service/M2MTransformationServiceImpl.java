package com.monasCI.Service;

import com.monasCI.util.FileReader;
import com.monasCI.util.ModelLoader;
import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;
import org.eclipse.epsilon.eol.exceptions.EolRuntimeException;
import org.eclipse.epsilon.etl.EtlModule;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Map;

@Service
public class M2MTransformationServiceImpl implements M2MTransformationService
{
    private Map<String, String> targetTransformations;
    private Map<String, String> targetMetaModels;
    private String gcipm;   // GCIPM stands for Global CI Pipeline Model

    @Override
    public InMemoryEmfModel m2mTransformation(String sourceFlexmi, String targetCI) throws Exception
    {
        EtlModule module = new EtlModule();
        module.parse(targetTransformations.get(targetCI), new File("/program.etl"));
        if(!module.getParseProblems().isEmpty())
        {
            throw new RuntimeException(module.getParseProblems().get(0).toString());
        }
        module.getContext().setOutputStream(System.out);
        return runTransformation(
                module,
                sourceFlexmi,
                gcipm,
                targetMetaModels.get(targetCI));
    }

    private InMemoryEmfModel runTransformation(EtlModule module, String sourceFlexmi, String sourceEmfatic, String targetEmfatic)
            throws IOException, EolRuntimeException
    {
        InMemoryEmfModel sourceModel = ModelLoader.getInMemoryFlexmiModel(sourceFlexmi, sourceEmfatic);
        sourceModel.setName("Source");

        InMemoryEmfModel targetModel = ModelLoader.getBlankInMemoryModel(targetEmfatic);
        targetModel.setName("Target");

        module.getContext().getModelRepository().addModel(sourceModel);
        module.getContext().getModelRepository().addModel(targetModel);

        module.execute();
        // targetModel.allContents().forEach(System.out::println);
        return targetModel;
    }

    @PostConstruct
    public void loadFiles() throws FileNotFoundException
    {
        targetTransformations = Map.of(
                "gitlabCI", FileReader.readFile("transformations/GCIPM2gitlabCI.etl")
        );
        targetMetaModels = Map.of(
                "gitlabCI", FileReader.readFile("models/gitlabCI.emf"),
                "circleCI", FileReader.readFile("models/circleCI.emf")
        );
        gcipm = FileReader.readFile("models/gcipm.emf");
    }
}

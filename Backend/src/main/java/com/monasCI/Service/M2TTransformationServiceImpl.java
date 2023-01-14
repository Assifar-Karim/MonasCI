package com.monasCI.Service;

import com.monasCI.util.FileReader;
import org.eclipse.epsilon.egl.EglTemplateFactoryModuleAdapter;
import org.eclipse.epsilon.egl.IEglModule;
import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Map;

@Service
public class M2TTransformationServiceImpl implements M2TTransformationService
{
    private Map<String, String> m2tTransformations;
    @Override
    public String m2tTransformation(InMemoryEmfModel model, String targetCI) throws Exception
    {
        IEglModule module = (IEglModule) new EglTemplateFactoryModuleAdapter();
        module.parse(m2tTransformations.get(targetCI), new File("/program.egl"));
        if(!module.getParseProblems().isEmpty())
        {
            throw new RuntimeException(module.getParseProblems().get(0).toString());
        }
        module.getContext().getModelRepository().addModel(model);
        return module.execute() + "";
    }

    @PostConstruct
    public void loadFiles() throws FileNotFoundException
    {
        m2tTransformations = Map.of(
                "gitlabCI", FileReader.readFile("transformations/gitlabCI.egl"));
    }
}

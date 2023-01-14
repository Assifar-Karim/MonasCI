package com.monasCI.controller;

import com.monasCI.Service.M2MTransformationService;
import com.monasCI.Service.M2TTransformationService;
import com.monasCI.dto.TransformationDTO;
import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ModelController
{
    @Autowired
    private M2MTransformationService m2mTransformationService;
    @Autowired
    private M2TTransformationService m2tTransformationService;

    // NOTE (KARIM) : This method needs to start with an M2M transformation then proceed with a M2T transformation
    @PostMapping("/forwards")
    public ResponseEntity<?> forwardEngineering(@RequestBody TransformationDTO transformationDTO) throws Exception
    {
        // NOTE (KARIM) : The current transformationDTO manipulation in this code block are only for testing purposes
        /*transformationDTO.setSourceFlexmi("<?nsuri gcipm?>\n" +
                "<pipeline>\n" +
                "    <globalUnit name=\"test\">\n" +
                "        <job name=\"test\">\n" +
                "            <docker imageName=\"python:2.7\"/>\n" +
                "            <command name=\"\" task=\"echo Running tests\"/>\n" +
                "            <command name=\"\" task=\"make test\"/>\n" +
                "            <environmentVar key=\"CI\" value=\"true\"/>\n" +
                "        </job>\n" +
                "    </globalUnit>\n" +
                "    <globalUnit name=\"build\" dependsOn=\"test\">\n" +
                "        <job name=\"build\">\n" +
                "            <docker imageName=\"python:2.7\"/>\n" +
                "            <command name=\"\" task=\"echo Build app\"/>\n" +
                "            <command name=\"\" task=\"make build\"/>\n" +
                "            <environmentVar key=\"CI\" value=\"true\"/>\n" +
                "        </job>\n" +
                "    </globalUnit>\n" +
                "</pipeline>");
        transformationDTO.setTargetCI("gitlabCI");*/
        InMemoryEmfModel targetModel = m2mTransformationService
                .m2mTransformation(transformationDTO.getSourceFlexmi(), transformationDTO.getTargetCI());
        String generatedConfigFile = m2tTransformationService
                .m2tTransformation(targetModel, transformationDTO.getTargetCI());
        return ResponseEntity.ok(generatedConfigFile);
    }
}

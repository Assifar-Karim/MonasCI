package com.monasCI.controller;

import com.monasCI.Service.M2MTransformationService;
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
    private M2MTransformationService transformationService;

    // NOTE (KARIM) : This method needs to start with an M2M transformation then proceed with a M2T transformation
    @PostMapping("/")
    public ResponseEntity<?> testMethod(@RequestBody TransformationDTO transformationDTO) throws Exception
    {
        // NOTE (KARIM) : The current transformationDTO manipulation in this code block are only for testing purposes
        transformationDTO.setSourceFlexmi("<?nsuri tree?>\n" +
                "<tree label=\"t1\">\n" +
                "\t<tree label=\"t2\">\n" +
                "\t\t<tree label=\"t3\"/>\n" +
                "\t\t<tree label=\"t4\"/>\n" +
                "\t</tree>\n" +
                "</tree>");
        transformationDTO.setTargetCI("graph");
        InMemoryEmfModel targetModel = transformationService
                .m2mTransformation(transformationDTO.getSourceFlexmi(), transformationDTO.getTargetCI());
        return null;
    }
}

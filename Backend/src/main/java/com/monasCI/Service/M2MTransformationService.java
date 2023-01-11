package com.monasCI.Service;

import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;

public interface M2MTransformationService
{
    InMemoryEmfModel m2mTransformation(String sourceFlexmi, String targetCI) throws Exception;
}

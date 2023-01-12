package com.monasCI.Service;

import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;
import org.eclipse.epsilon.eol.exceptions.EolRuntimeException;

public interface M2TTransformationService
{
    String m2tTransformation(InMemoryEmfModel model, String targetCI) throws Exception;
}

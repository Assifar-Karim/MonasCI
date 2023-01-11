package com.monasCI.dto;

public class TransformationDTO
{
    private String sourceFlexmi;
    private String targetCI;

    public TransformationDTO(String sourceFlexmi, String targetCI)
    {
        this.sourceFlexmi = sourceFlexmi;
        this.targetCI = targetCI;
    }

    public String getSourceFlexmi()
    {
        return sourceFlexmi;
    }

    public void setSourceFlexmi(String sourceFlexmi)
    {
        this.sourceFlexmi = sourceFlexmi;
    }

    public String getTargetCI()
    {
        return targetCI;
    }

    public void setTargetCI(String targetCI)
    {
        this.targetCI = targetCI;
    }
}

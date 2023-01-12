package com.monasCI.util;

import org.springframework.util.ResourceUtils;

import java.io.*;
import java.nio.charset.StandardCharsets;

public class FileReader
{
    public static String readFile(String path) throws FileNotFoundException
    {
        File file = ResourceUtils.getFile("classpath:".concat(path));
        String data = "";
        try
        (
            InputStream inputStream = new FileInputStream(file);
        )
        {
          data = new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        return data;
    }
}

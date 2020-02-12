package com.example.restservice;

import java.io.IOException;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;

@RestController
public class ImageController {
	
	@RequestMapping(
			value = "/sid", 
			method = RequestMethod.GET,
            produces = MediaType.IMAGE_PNG_VALUE
    )
    public ResponseEntity<byte[]> getImage() throws IOException {

        ClassPathResource imgFile = new ClassPathResource("image/sid.png");
        byte[] bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Content-Disposition", "attachment; filename=sid.png");
        responseHeaders.add("Location", "/greeting");
        
        return ResponseEntity
                .ok()
                .headers(responseHeaders)
                .contentType(MediaType.IMAGE_PNG)
                .body(bytes);
    }
}
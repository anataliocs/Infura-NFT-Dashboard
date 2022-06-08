package io.infura.nftdashboard.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.Charset;

import static java.nio.charset.Charset.defaultCharset;

@Configuration
public class InfuraConfig {

    @Value("${infura.nft.projectid}")
    private String infuraProjectId;

    @Value("${infura.nft.projectsecret}")
    private String infuraProjectSecret;

    @Bean
    public RestTemplate restTemplate() {
        final var restTemplate =
            new RestTemplateBuilder().basicAuthentication(infuraProjectId, infuraProjectSecret, defaultCharset())
                .build();

        return restTemplate;
    }
}

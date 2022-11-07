package io.infura.nftdashboard.config;

import ch.qos.logback.classic.pattern.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.Charset;
import java.util.Arrays;

import static java.nio.charset.Charset.defaultCharset;

@Configuration
public class InfuraConfig {

    @Value("${infura.nft.projectid}")
    private String infuraProjectId;

    @Value("${infura.nft.projectsecret}")
    private String infuraProjectSecret;

    @Bean
    public MappingJackson2HttpMessageConverter messageConverter() {
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setSupportedMediaTypes(Arrays.asList(MediaType.TEXT_PLAIN, new MediaType(MediaType.TEXT_PLAIN, defaultCharset())));

        return converter;
    }

    @Bean
    public RestTemplate restTemplate(MappingJackson2HttpMessageConverter messageConverter) {
        final var restTemplate =
            new RestTemplateBuilder().basicAuthentication(infuraProjectId, infuraProjectSecret, defaultCharset())
                .additionalMessageConverters(messageConverter)
                .build();

        return restTemplate;
    }
}

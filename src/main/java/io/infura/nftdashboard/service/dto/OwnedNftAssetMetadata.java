package io.infura.nftdashboard.service.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OwnedNftAssetMetadata {

    private String name;
    private String description;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String externalLink;
    private String image;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String animationUrl;
    private String ipfsHash;

    public String getName() {
        return name;
    }

    public OwnedNftAssetMetadata setName(String name) {
        this.name = name;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public OwnedNftAssetMetadata setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getImage() {
        return image;
    }

    public OwnedNftAssetMetadata setImage(String image) {
        this.image = image;
        return this;
    }

    public String getExternalLink() {
        return externalLink;
    }

    public OwnedNftAssetMetadata setExternalLink(String externalLink) {
        this.externalLink = externalLink;
        return this;
    }

    public String getAnimationUrl() {
        return animationUrl;
    }

    public OwnedNftAssetMetadata setAnimationUrl(String animationUrl) {
        this.animationUrl = animationUrl;
        return this;
    }

    public String getIpfsHash() {
        return ipfsHash;
    }

    public OwnedNftAssetMetadata setIpfsHash(String ipfsHash) {
        this.ipfsHash = ipfsHash;
        return this;
    }
}

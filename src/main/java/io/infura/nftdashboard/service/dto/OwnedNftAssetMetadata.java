package io.infura.nftdashboard.service.dto;

public class OwnedNftAssetMetadata {

    private String name;
    private String description;
    private String external_link;
    private String image;
    private String animationUrl;

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

    public String getExternal_link() {
        return external_link;
    }

    public OwnedNftAssetMetadata setExternal_link(String external_link) {
        this.external_link = external_link;
        return this;
    }

    public String getImage() {
        return image;
    }

    public OwnedNftAssetMetadata setImage(String image) {
        this.image = image;
        return this;
    }

    public String getAnimationUrl() {
        return animationUrl;
    }

    public OwnedNftAssetMetadata setAnimationUrl(String animationUrl) {
        this.animationUrl = animationUrl;
        return this;
    }
}

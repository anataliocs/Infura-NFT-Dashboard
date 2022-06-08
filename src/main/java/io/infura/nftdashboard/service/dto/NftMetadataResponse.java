package io.infura.nftdashboard.service.dto;

public class NftMetadataResponse {

    private String contract;
    private int tokenId;
    private String name;
    private String description;
    private String image;

    public String getContract() {
        return contract;
    }

    public NftMetadataResponse setContract(String contract) {
        this.contract = contract;
        return this;
    }

    public int getTokenId() {
        return tokenId;
    }

    public NftMetadataResponse setTokenId(int tokenId) {
        this.tokenId = tokenId;
        return this;
    }

    public String getName() {
        return name;
    }

    public NftMetadataResponse setName(String name) {
        this.name = name;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public NftMetadataResponse setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getImage() {
        return image;
    }

    public NftMetadataResponse setImage(String image) {
        this.image = image;
        return this;
    }
}

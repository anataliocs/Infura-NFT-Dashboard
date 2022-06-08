package io.infura.nftdashboard.service.dto;

public class OwnedNftAsset {

    private String contract;
    private String tokenId;
    private String supply;
    private String type;
    private OwnedNftAssetMetadata metadata;

    public String getContract() {
        return contract;
    }

    public OwnedNftAsset setContract(String contract) {
        this.contract = contract;
        return this;
    }

    public String getTokenId() {
        return tokenId;
    }

    public OwnedNftAsset setTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }

    public String getSupply() {
        return supply;
    }

    public OwnedNftAsset setSupply(String supply) {
        this.supply = supply;
        return this;
    }

    public String getType() {
        return type;
    }

    public OwnedNftAsset setType(String type) {
        this.type = type;
        return this;
    }

    public OwnedNftAssetMetadata getMetadata() {
        return metadata;
    }

    public OwnedNftAsset setMetadata(OwnedNftAssetMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
}

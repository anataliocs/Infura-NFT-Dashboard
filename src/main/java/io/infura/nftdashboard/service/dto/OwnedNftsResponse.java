package io.infura.nftdashboard.service.dto;

public class OwnedNftsResponse {

    private String network;
    private int pageNumber;
    private int total;
    private String account;
    private String type;
    private OwnedNftAsset[] assets;

    public String getNetwork() {
        return network;
    }

    public OwnedNftsResponse setNetwork(String network) {
        this.network = network;
        return this;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public OwnedNftsResponse setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }

    public int getTotal() {
        return total;
    }

    public OwnedNftsResponse setTotal(int total) {
        this.total = total;
        return this;
    }

    public String getAccount() {
        return account;
    }

    public OwnedNftsResponse setAccount(String account) {
        this.account = account;
        return this;
    }

    public String getType() {
        return type;
    }

    public OwnedNftsResponse setType(String type) {
        this.type = type;
        return this;
    }

    public OwnedNftAsset[] getAssets() {
        return assets;
    }

    public OwnedNftsResponse setAssets(OwnedNftAsset[] assets) {
        this.assets = assets;
        return this;
    }
}

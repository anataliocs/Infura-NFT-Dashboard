package io.infura.nftdashboard.service.dto;

public class NftsCreatedByCollectionResponse {

    private int pageNumber;
    private String network;
    private String total;
    private String account;
    private String type;
    private OwnedNftAsset[] assets;

    public int getPageNumber() {
        return pageNumber;
    }

    public NftsCreatedByCollectionResponse setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }

    public String getNetwork() {
        return network;
    }

    public NftsCreatedByCollectionResponse setNetwork(String network) {
        this.network = network;
        return this;
    }

    public String getTotal() {
        return total;
    }

    public NftsCreatedByCollectionResponse setTotal(String total) {
        this.total = total;
        return this;
    }

    public String getAccount() {
        return account;
    }

    public NftsCreatedByCollectionResponse setAccount(String account) {
        this.account = account;
        return this;
    }

    public String getType() {
        return type;
    }

    public NftsCreatedByCollectionResponse setType(String type) {
        this.type = type;
        return this;
    }

    public OwnedNftAsset[] getAssets() {
        return assets;
    }

    public NftsCreatedByCollectionResponse setAssets(OwnedNftAsset[] assets) {
        this.assets = assets;
        return this;
    }
}

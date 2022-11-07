package io.infura.nftdashboard.service;

import io.infura.nftdashboard.service.dto.NftMetadataResponse;
import io.infura.nftdashboard.service.dto.NftsCreatedByCollectionResponse;
import io.infura.nftdashboard.service.dto.OwnedNftsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class NftService {

    private final RestTemplate restTemplate;

    public NftService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getNftCollectionMetadata() {

        final UriComponents uri = getBaseUriBuilder().path("/networks/{chainid}/nfts/{tokenAddress}")
            .buildAndExpand("1", "0xab5801a7d398351b8be11c439e05c5b3259aec9b");

        return restTemplate.getForObject(uri.toUri(), String.class);
    }

    public NftMetadataResponse getNftMetadata(final String tokenAddress, final String tokenId) {

        final UriComponents uri = getBaseUriBuilder().path("/networks/{chainid}/nfts/{tokenAddress}/tokens/{tokenId}")
            .buildAndExpand("1", tokenAddress, tokenId);

        return restTemplate.getForObject(uri.toUri(), NftMetadataResponse.class);
    }

    public OwnedNftsResponse getNftsOwnedByAccount(String accountAddress) {

        final UriComponents uri = getBaseUriBuilder()
            .path("/networks/{chainid}/accounts/{accountAddress}/assets/nfts")
            .buildAndExpand("1", accountAddress);

        return restTemplate.getForObject(uri.toUri(), OwnedNftsResponse.class);
    }

    public NftsCreatedByCollectionResponse getNftsCreatedByCollection() {

        final UriComponents uri = getBaseUriBuilder()
            .path("/networks/{chainid}/nfts/{tokenAddress}/tokens")
            .buildAndExpand("1", "0xa9cb55d05d3351dcd02dd5dc4614e764ce3e1d6e");

        return restTemplate.getForObject(uri.toUri(), NftsCreatedByCollectionResponse.class);
    }

    private static UriComponentsBuilder getBaseUriBuilder() {
        return UriComponentsBuilder
            .fromHttpUrl("https://nft.api.infura.io");
    }
}

package io.infura.nftdashboard.web.rest;

import io.infura.nftdashboard.service.NftService;
import io.infura.nftdashboard.service.dto.NftMetadataResponse;
import io.infura.nftdashboard.service.dto.NftsCreatedByCollectionResponse;
import io.infura.nftdashboard.service.dto.OwnedNftsResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for Infura API Calls.
 */
@RestController
@RequestMapping("/api/infura/nft")
public class InfuraResource {

    final NftService nftService;

    public InfuraResource(NftService nftService) {
        this.nftService = nftService;
    }

    @GetMapping(value = "/{tokenAddress}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public String getNftCollectionMetadata(@PathVariable String tokenAddress) {
        return nftService.getNftCollectionMetadata();
    }

    @GetMapping(value = "/{tokenAddress}/tokens/{tokenId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public NftMetadataResponse getNftMetadata(@PathVariable String tokenAddress, @PathVariable String tokenId) {
        return nftService.getNftMetadata(tokenAddress, tokenId);
    }

    @GetMapping(value = "/{accountAddress}/assets", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public OwnedNftsResponse getNftsOwnedByAddress(@PathVariable String accountAddress) {
        return nftService.getNftsOwnedByAccount(accountAddress);
    }

    @GetMapping(value = "/{accountAddress}/tokens", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public NftsCreatedByCollectionResponse getNftsCreatedCollection(@PathVariable String tokenAddress) {
        return nftService.getNftsCreatedByCollection();
    }
}

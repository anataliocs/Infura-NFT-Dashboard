package io.infura.nftdashboard.web.rest;

import io.infura.nftdashboard.service.NftService;
import io.infura.nftdashboard.service.dto.NftMetadataResponse;
import io.infura.nftdashboard.service.dto.NftsCreatedByCollectionResponse;
import io.infura.nftdashboard.service.dto.OwnedNftsResponse;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/nfts/{tokenAddress}")
    @ResponseStatus(HttpStatus.OK)
    public String getNftCollectionMetadata(@PathVariable String tokenAddress) {
        return nftService.getNftCollectionMetadata();
    }

    @GetMapping("/nfts/{tokenAddress}/tokens/{tokenId}")
    @ResponseStatus(HttpStatus.OK)
    public NftMetadataResponse getNftMetadata(@PathVariable String tokenAddress, @PathVariable String tokenId) {
        return nftService.getNftMetadata();
    }

    @GetMapping("/nfts/{accountAddress}")
    @ResponseStatus(HttpStatus.OK)
    public OwnedNftsResponse getNftsOwnedByAddress(@PathVariable String accountAddress) {
        return nftService.getNftsOwnedByAccount();
    }

    @GetMapping("/nfts/{accountAddress}/tokens")
    @ResponseStatus(HttpStatus.OK)
    public NftsCreatedByCollectionResponse getNftsCreatedCollection(@PathVariable String tokenAddress) {
        return nftService.getNftsCreatedByCollection();
    }
}

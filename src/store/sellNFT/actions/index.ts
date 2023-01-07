import { actionCreatorFactory } from "typescript-fsa";
import { Error, ReSellNFTReq, ReSellNFTRes } from "store/sellNFT";

const actionCreator = actionCreatorFactory("SELL_NFT");

////store address///
export const resellNFT =
  actionCreator.async<ReSellNFTReq, ReSellNFTRes, Error>("RESELL_NFT");
export const ApprovesellNFT =
  actionCreator.async<ReSellNFTReq, ReSellNFTRes, Error>("Approve_NFT");
export const CreateNFT =
  actionCreator.async<ReSellNFTReq, ReSellNFTRes, Error>("Create_NFT");

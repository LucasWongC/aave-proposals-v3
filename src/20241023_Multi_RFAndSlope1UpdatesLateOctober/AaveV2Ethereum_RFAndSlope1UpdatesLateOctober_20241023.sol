// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IProposalGenericExecutor} from 'aave-helpers/src/interfaces/IProposalGenericExecutor.sol';
import {AaveV2Ethereum, AaveV2EthereumAssets, ILendingPoolConfigurator} from 'aave-address-book/AaveV2Ethereum.sol';

/**
 * @title RF and Slope1 Updates Late October
 * @author karpatkey_TokenLogic
 * - Snapshot: https://snapshot.org/#/aave.eth/proposal/0x26a03c08359c340f63b78b0c3e96d37aa0adeda65814643b0886d4719048ea7e
 * - Discussion: https://governance.aave.com/t/arfc-ethereum-v2-reserve-factor-adjustment/16764/19
 */
contract AaveV2Ethereum_RFAndSlope1UpdatesLateOctober_20241023 is IProposalGenericExecutor {
  ILendingPoolConfigurator public constant POOL_CONFIGURATOR =
    ILendingPoolConfigurator(AaveV2Ethereum.POOL_CONFIGURATOR);

  uint256 public constant DAI_RF = 90_00;
  uint256 public constant LINK_RF = 95_00;
  uint256 public constant USDC_RF = 90_00;
  uint256 public constant USDT_RF = 90_00;
  uint256 public constant WBTC_RF = 95_00;
  uint256 public constant WETH_RF = 90_00;

  function execute() external {
    POOL_CONFIGURATOR.setReserveFactor(AaveV2EthereumAssets.DAI_UNDERLYING, DAI_RF);
    POOL_CONFIGURATOR.setReserveFactor(AaveV2EthereumAssets.LINK_UNDERLYING, LINK_RF);
    POOL_CONFIGURATOR.setReserveFactor(AaveV2EthereumAssets.USDC_UNDERLYING, USDC_RF);
    POOL_CONFIGURATOR.setReserveFactor(AaveV2EthereumAssets.USDT_UNDERLYING, USDT_RF);
    POOL_CONFIGURATOR.setReserveFactor(AaveV2EthereumAssets.WBTC_UNDERLYING, WBTC_RF);
    POOL_CONFIGURATOR.setReserveFactor(AaveV2EthereumAssets.WETH_UNDERLYING, WETH_RF);
  }
}

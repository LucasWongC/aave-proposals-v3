import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    author: 'BGD Labs @bgdlabs',
    pools: [
      'AaveV3Ethereum',
      'AaveV3EthereumLido',
      'AaveV3Polygon',
      'AaveV3Avalanche',
      'AaveV3Optimism',
      'AaveV3Arbitrum',
      'AaveV3Metis',
      'AaveV3Base',
      'AaveV3Gnosis',
      'AaveV3Scroll',
      'AaveV3BNB',
      'AaveV3ZkSync',
    ],
    title: 'Upgrade all Aave instances to 3.2',
    shortName: 'UpgradeAllAaveInstancesTo32',
    date: '20240924',
    discussion: 'https://governance.aave.com/t/bgd-aave-v3-2-liquid-emodes/19037/3',
    snapshot:
      'https://snapshot.org/#/aave.eth/proposal/0x68ce69b5e71df1d77c2ad814a5d41162a40be54473576ff590d0b1bb5afde4a7',
    votingNetwork: 'POLYGON',
  },
  poolOptions: {
    AaveV3Ethereum: {configs: {OTHERS: {}}, cache: {blockNumber: 20820879}},
    AaveV3EthereumLido: {configs: {OTHERS: {}}, cache: {blockNumber: 20820880}},
    AaveV3Polygon: {configs: {OTHERS: {}}, cache: {blockNumber: 62219908}},
    AaveV3Avalanche: {configs: {OTHERS: {}}, cache: {blockNumber: 50938881}},
    AaveV3Optimism: {configs: {OTHERS: {}}, cache: {blockNumber: 125793616}},
    AaveV3Arbitrum: {configs: {OTHERS: {}}, cache: {blockNumber: 256879313}},
    AaveV3Metis: {configs: {OTHERS: {}}, cache: {blockNumber: 18557401}},
    AaveV3Base: {configs: {OTHERS: {}}, cache: {blockNumber: 20198333}},
    AaveV3Gnosis: {configs: {OTHERS: {}}, cache: {blockNumber: 36166047}},
    AaveV3Scroll: {configs: {OTHERS: {}}, cache: {blockNumber: 9573514}},
    AaveV3BNB: {configs: {OTHERS: {}}, cache: {blockNumber: 42535536}},
    AaveV3ZkSync: {configs: {OTHERS: {}}, cache: {blockNumber: 45002749}},
  },
};
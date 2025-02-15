// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IStakeKit {
    function stake(uint256 amount) external;
    function getYieldOpportunities() external view returns (uint256);
}

interface ISteerProtocol {
    function rebalance() external;
}

interface IUniswapV3 {
    function getPositions(address owner) external view returns (uint256[] memory);
}

contract LiquidityRebalancer {
    IStakeKit public stakeKit;
    ISteerProtocol public steerProtocol;
    IUniswapV3 public uniswap;

    constructor(address _stakeKit, address _steerProtocol, address _uniswap) {
        stakeKit = IStakeKit(_stakeKit);
        steerProtocol = ISteerProtocol(_steerProtocol);
        uniswap = IUniswapV3(_uniswap);
    }

    function rebalanceWithAI(address user) external {
        uint256[] memory positions = uniswap.getPositions(user);
        require(positions.length > 0, "No active liquidity positions");

        steerProtocol.rebalance();
    }

    function stakeForYield(uint256 amount) external {
        stakeKit.stake(amount);
    }

    function getBestYield() external view returns (uint256) {
        return stakeKit.getYieldOpportunities();
    }
}

/** Class representing a Connext client. */
class Connext {
  /**
     * Create a point.
     * @param {Object} params - The constructor object.
     * @param params.ingridAddress Eth address of intermediary .
     * @param params.watcherUrl Url of watcher server.
     * @param params.ingridUrl Url of intermediary server.
     */
  constructor ({ ingridAddress, watcherUrl, ingridUrl }) {}

  /**
     * Set the initial deposit.
     * @param {BigNumber} initialDeposit - Value of the initial deposit.
     */
  register (initialDeposit) {}

  /**
   * Create a deposit.
   * @param {BigNumber} deposit - Value of the deposit.
   */
  deposit (deposit) {
    // ...
  }

  /**
    * Withdraw bonded funds from channel
    */
  withdraw () {
    // ...
  }

  /**
    * Withdraw bonded funds from channel
    */
  withdrawFinal () {}

  /**
     * Sync signed updated with chain
     */
  checkpoint () {}

  /**
    *
     * @param {Object} params - The method object.
     * @param params.to eth address to wallet.
     * @param params.deposit optional
     *
    */
  openChannel ({ to, deposit }) {}

  /**
    *
    * @param {int} vcId - The method object.
    */
  joinChannel (vcId) {}

  /**
     * Update Balance
     * @param {Object} params - The method object.
     * @param params.vcId address of virtual channel.
     * @param params.balance new balance diff sent
     *
    */
  updateBalance ({ vcId, balance }) {}

  /**
     * Close one channel
    * @param {Object} params - The method object.
    * @param params.vcIds virtual channel address.
    * @param params.balance new balance diff sent
    */
  closeChannel ({ vcId, balance, nonce, signature }) {}

  /**
    * Close many channels
    * @param {Array} params - Array of objects containing { vcId, balance, nonce, signature }
    */
  closeChannels ({ vcId, balance, nonce, signature }) {}
}

<a name="Connext"></a>

## Connext
Class representing a Connext client.

**Kind**: global class  

* [Connext](#Connext)
    * [new Connext(params)](#new_Connext_new)
    * [.register(initialDeposit)](#Connext+register)
    * [.deposit(deposit)](#Connext+deposit)
    * [.withdraw()](#Connext+withdraw)
    * [.withdrawFinal()](#Connext+withdrawFinal)
    * [.checkpoint()](#Connext+checkpoint)
    * [.openChannel(params)](#Connext+openChannel)
    * [.joinChannel(vcId)](#Connext+joinChannel)
    * [.updateBalance(params)](#Connext+updateBalance)
    * [.closeChannel(params)](#Connext+closeChannel)
    * [.closeChannels(params)](#Connext+closeChannels)

<a name="new_Connext_new"></a>

### new Connext(params)
Create a point.


| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The constructor object. |
| params.ingridAddress |  | Eth address of intermediary . |
| params.watcherUrl |  | Url of watcher server. |
| params.ingridUrl |  | Url of intermediary server. |

<a name="Connext+register"></a>

### connext.register(initialDeposit)
Set the initial deposit.

**Kind**: instance method of [<code>Connext</code>](#Connext)  

| Param | Type | Description |
| --- | --- | --- |
| initialDeposit | <code>BigNumber</code> | Value of the initial deposit. |

<a name="Connext+deposit"></a>

### connext.deposit(deposit)
Create a deposit.

**Kind**: instance method of [<code>Connext</code>](#Connext)  

| Param | Type | Description |
| --- | --- | --- |
| deposit | <code>BigNumber</code> | Value of the deposit. |

<a name="Connext+withdraw"></a>

### connext.withdraw()
Withdraw bonded funds from channel

**Kind**: instance method of [<code>Connext</code>](#Connext)  
<a name="Connext+withdrawFinal"></a>

### connext.withdrawFinal()
Withdraw bonded funds from channel

**Kind**: instance method of [<code>Connext</code>](#Connext)  
<a name="Connext+checkpoint"></a>

### connext.checkpoint()
Sync signed updated with chain

**Kind**: instance method of [<code>Connext</code>](#Connext)  
<a name="Connext+openChannel"></a>

### connext.openChannel(params)
**Kind**: instance method of [<code>Connext</code>](#Connext)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The method object. |
| params.to |  | eth address to wallet. |
| params.deposit |  | optional |

<a name="Connext+joinChannel"></a>

### connext.joinChannel(vcId)
**Kind**: instance method of [<code>Connext</code>](#Connext)  

| Param | Type | Description |
| --- | --- | --- |
| vcId | <code>int</code> | The method object. |

<a name="Connext+updateBalance"></a>

### connext.updateBalance(params)
Update Balance

**Kind**: instance method of [<code>Connext</code>](#Connext)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The method object. |
| params.vcId |  | address of virtual channel. |
| params.balance |  | new balance diff sent |

<a name="Connext+closeChannel"></a>

### connext.closeChannel(params)
Close one channel

**Kind**: instance method of [<code>Connext</code>](#Connext)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The method object. |
| params.vcIds |  | virtual channel address. |
| params.balance |  | new balance diff sent |

<a name="Connext+closeChannels"></a>

### connext.closeChannels(params)
Close many channels

**Kind**: instance method of [<code>Connext</code>](#Connext)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Array</code> | Array of objects containing { vcId, balance, nonce, signature } |


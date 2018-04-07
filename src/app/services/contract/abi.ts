const abi = [{
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [{'name': '', 'type': 'bytes32'}],
    'payable': false,
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'owner_fee',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'manager_address',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'type': 'function'
}, {
    'constant': false,
    'inputs': [],
    'name': 'register',
    'outputs': [],
    'payable': false,
    'type': 'function'
}, {
    'constant': false,
    'inputs': [],
    'name': 'destruct',
    'outputs': [],
    'payable': false,
    'type': 'function'
}, {
    'constant': false,
    'inputs': [],
    'name': 'withdraw',
    'outputs': [],
    'payable': false,
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'result_block',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_result_hash', 'type': 'bytes32'}],
    'name': 'manual_lottery',
    'outputs': [],
    'payable': false,
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'result',
    'outputs': [{'name': '', 'type': 'bytes1'}],
    'payable': false,
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'jackpot',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_lottery', 'type': 'address'}],
    'name': 'accumulate',
    'outputs': [],
    'payable': false,
    'type': 'function'
}, {
    'constant': false,
    'inputs': [],
    'name': 'lottery',
    'outputs': [],
    'payable': false,
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_char', 'type': 'bytes1'}],
    'name': 'play',
    'outputs': [],
    'payable': true,
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'result_hash',
    'outputs': [{'name': '', 'type': 'bytes32'}],
    'payable': false,
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'fee',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'open',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'type': 'function'
}, {
    'inputs': [{'name': '_manager', 'type': 'address'}, {'name': '_fee', 'type': 'uint256'}, {
        'name': '_jackpot',
        'type': 'uint256'
    }, {'name': '_owner_fee', 'type': 'uint256'}], 'payable': false, 'type': 'constructor'
}, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': '_total', 'type': 'uint256'}],
    'name': 'Balance',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': '_result', 'type': 'bytes1'}],
    'name': 'Result',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': '_open', 'type': 'bool'}],
    'name': 'Open',
    'type': 'event'
}]

export default abi;

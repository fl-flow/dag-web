const q = {
  nodes: [
    {
      id: 'node1',
      renderKey: 'DND_NDOE',
      width: 180,
      height: 36,
      label: '算法节点-1',
      ports: [
        { id: 'node1-input-1', type: 'input', group: 'top', tooltip: '输入桩' },
        {
          id: 'node1-output-1',
          type: 'output',
          group: 'bottom',
          tooltip: '输出桩',
        },
      ],
      x: 300,
      y: 50,
      _order: 0,
    },
    {
      id: 'node2',
      renderKey: 'DND_NDOE',
      width: 180,
      height: 36,
      label: '算法节点-2',
      ports: [
        {
          id: 'node2-input-1',
          type: 'input',
          group: 'top',
          tooltip: '输入桩',
          connected: true,
        },
        {
          id: 'node2-output-1',
          type: 'output',
          group: 'bottom',
          tooltip: '输出桩',
        },
      ],
      x: 80,
      y: 180,
      _order: 0,
    },
    {
      id: 'node3',
      renderKey: 'DND_NDOE',
      width: 180,
      height: 36,
      label: '算法节点-3',
      ports: [
        {
          id: 'node3-input-1',
          type: 'input',
          group: 'top',
          tooltip: '输入桩',
          connected: true,
        },
        {
          id: 'node3-output-1',
          type: 'output',
          group: 'bottom',
          tooltip: '输出桩',
        },
      ],
      x: 300,
      y: 180,
      _order: 1,
    },
    {
      id: 'node4',
      renderKey: 'DND_NDOE',
      width: 180,
      height: 36,
      label: '算法节点-4',
      ports: [
        {
          id: 'node4-input-1',
          type: 'input',
          group: 'top',
          tooltip: '输入桩',
          connected: true,
        },
        {
          id: 'node4-output-1',
          type: 'output',
          group: 'bottom',
          tooltip: '输出桩',
        },
      ],
      x: 520,
      y: 180,
      _order: 2,
    },
  ],
  edges: [
    {
      id: '78ad1853-3a06-43ca-8184-0a605fd70b3a',
      source: 'node1',
      target: 'node2',
      sourcePortId: 'node1-output-1',
      targetPortId: 'node2-input-1',
      connector: { name: 'rounded' },
      router: { name: 'manhattan' },
      sourcePort: 'node1-output-1',
      targetPort: 'node2-input-1',
    },
    {
      id: 'b27c0a09-16ec-4521-bafb-f29b75add75a',
      source: 'node1',
      target: 'node3',
      sourcePortId: 'node1-output-1',
      targetPortId: 'node3-input-1',
      connector: { name: 'rounded' },
      router: { name: 'manhattan' },
      sourcePort: 'node1-output-1',
      targetPort: 'node3-input-1',
    },
    {
      id: 'b90b2ee4-cd8d-4a80-a634-d2c8d9fb1b4b',
      source: 'node1',
      target: 'node4',
      sourcePortId: 'node1-output-1',
      targetPortId: 'node4-input-1',
      connector: { name: 'rounded' },
      router: { name: 'manhattan' },
      sourcePort: 'node1-output-1',
      targetPort: 'node4-input-1',
    },
  ],
};

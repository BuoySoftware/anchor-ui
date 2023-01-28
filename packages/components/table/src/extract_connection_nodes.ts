export interface Edge<NodeData> {
  node: NodeData;
}
export interface Connection<NodeData> {
  edges: Edge<NodeData>[];
}

export function extractConnectionNodes<NodeData>(
  connection?: Connection<NodeData>
): NodeData[] {
  if (!connection) return [];

  return connection.edges.map(({ node }) => node);
}

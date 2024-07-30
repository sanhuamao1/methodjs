
type TOptions = {
    selfField?: string,
    parentField?: string
}

/**
 * 生成树
 * @param list 
 * @param options 传入自身标识的字段名称 与 指向父节点的字段名称 比如 { selfField = 'id', parentField = 'parentId' } 
 * @returns 
 */

export const getTree = (list: Array<any>, options: TOptions = {}) => {
    if (!Array.isArray(list) || list.length === 0) {
        throw new Error('Data must be a non-empty array.');
    }
    const { selfField = 'id', parentField = 'parentId' } = options;
    const childrenMap = new Map();
    list.forEach(item => {
        const parentId = item[parentField];
        const children = childrenMap.get(parentId) || [];
        children.push(item);
        childrenMap.set(parentId, children);
    });

    // 找出根节点，即没有父节点的节点
    const rootIds = Array.from(childrenMap.keys()).filter(id => id === null || id === undefined);
    const roots = rootIds.map(id => {
        const children = childrenMap.get(id);
        return buildTree(children || []);
    });

    // 递归构建树结构
    function buildTree(items: Array<any>): Object {
        return items.map(item => {
            const children = childrenMap.get(item[selfField]);
            return {
                ...item,
                children: children ? buildTree(children) : []
            };
        });
    }

    return roots.length > 1 ? roots : roots[0];
}
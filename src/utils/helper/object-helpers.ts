export const updateObjectInArray = (items: any[], itemId: any, objPropName: any, newObjectProps: any) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjectProps }
        }
        return u;
    })
}
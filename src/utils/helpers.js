```javascript
// src/utils/helpers.js

export const formatData = (data) => {
    return data.map(item => {
        return {
            ...item,
            createdAt: new Date(item.createdAt).toLocaleDateString(),
            updatedAt: new Date(item.updatedAt).toLocaleDateString()
        }
    });
}

export const sortData = (data, key, order = 'asc') => {
    return data.sort((a, b) => {
        if(order === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        } else {
            return a[key] < b[key] ? 1 : -1;
        }
    });
}

export const filterData = (data, key, value) => {
    return data.filter(item => item[key] === value);
}

export const paginateData = (data, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return data.slice(startIndex, endIndex);
}

export const aggregateData = (data, key) => {
    return data.reduce((acc, curr) => {
        if(!acc[curr[key]]) {
            acc[curr[key]] = 1;
        } else {
            acc[curr[key]] += 1;
        }
        return acc;
    }, {});
}
```
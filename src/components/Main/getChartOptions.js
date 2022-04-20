function recordToPoint(record) {
    return record.map(item => ({
        name: item.id,
        y: item.data > 100 ? null : item.data,
    }))
}

export function getChartOptions(data) {
    return {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Data'
        },
        series: [{
            data: data.map(recordToPoint),
        }]
    }
}

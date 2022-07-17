showData(data);

function showData(data) {
    d3.select('tbody').html('');

    data.forEach(obj=>{
        let row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>{
            row.append('td').text(val);
        });
    });
};

d3.selectAll('input').on('change',handleChange);

var filteredData = data;

function handleChange() {
    d3.selectAll('input')._groups.forEach(filter=>{
        var key = d3.select(this).property('id');
        var value = d3.select(this).property('value');

        if(value){
            filteredData = filteredData.filter(obj=>obj[key]== value);
        };
    });
    showData(filteredData);
};

d3.select('button').on('click', ()=>{
    filteredData = data;
    showData(filteredData);
    d3.selectAll('input').property('value','');
})
let votes = [0, 0, 0, 0];
let myChart;

function updateVotes() {
    const totalVotes = votes.reduce((acc, cur) => acc + cur);

    for (let i = 0; i < 4; i++) {
        const percentage = totalVotes === 0 ? 0 : (votes[i] / totalVotes) * 100;
        $(`#votes${i + 1}`).text(votes[i]);
        $(`#progress-bar${i + 1}`).css("width", percentage + "%").attr("aria-valuenow", percentage);
    }

    updateBarGraph(votes);
}

for (let i = 0; i < 4; i++) {
    $(`#vote${i + 1}`).click(function () {
        votes[i]++;
        updateVotes();
    });
}

function updateBarGraph(votesArray) {
    if (myChart) {
        myChart.destroy();
    }

    var ctx = document.getElementById("bar-graph").getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Nominee 1", "Nominee 2", "Nominee 3", "Nominee 4"],
            datasets: [{
                label: 'Votes',
                data: votesArray,
                backgroundColor: [
                    'rgba(0, 123, 255, 0.5)',
                    'rgba(40, 167, 69, 0.5)',
                    'rgba(23, 162, 184, 0.5)',
                    'rgba(255, 193, 7, 0.5)',
                ],
                borderColor: [
                    'rgba(23, 162, 184, 1)',
                    'rgba(40, 167, 69, 1)',
                    'rgba(23, 162, 184, 1)',
                    'rgba(255, 193, 7, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

updateBarGraph(votes);

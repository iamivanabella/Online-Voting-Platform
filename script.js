
// Initialize vote counts
let votes1 = 0;
let votes2 = 0;
let votes3 = 0;
let votes4 = 0;

// Initialize chart instance
let myChart;

// Update the vote count, progress bar, and graph
function updateVotes() {
    const totalVotes = votes1 + votes2 + votes3 + votes4;

    // Update the vote count display
    $("#votes1").text(votes1);
    $("#votes2").text(votes2);
    $("#votes3").text(votes3);
    $("#votes4").text(votes4);

    // Update the progress bars
    const percentage1 = totalVotes === 0 ? 0 : (votes1 / totalVotes) * 100;
    const percentage2 = totalVotes === 0 ? 0 : (votes2 / totalVotes) * 100;
    const percentage3 = totalVotes === 0 ? 0 : (votes3 / totalVotes) * 100;
    const percentage4 = totalVotes === 0 ? 0 : (votes4 / totalVotes) * 100;

    $("#progress-bar1").css("width", percentage1 + "%");
    $("#progress-bar1").attr("aria-valuenow", percentage1);

    $("#progress-bar2").css("width", percentage2 + "%");
    $("#progress-bar2").attr("aria-valuenow", percentage2);

    $("#progress-bar3").css("width", percentage3 + "%");
    $("#progress-bar3").attr("aria-valuenow", percentage3);

    $("#progress-bar4").css("width", percentage4 + "%");
    $("#progress-bar4").attr("aria-valuenow", percentage4);

    // Update the bar graph
    updateBarGraph([votes1, votes2, votes3, votes4]);
}

// Event handlers for voting buttons
$("#vote1").click(function () {
    votes1++;
    updateVotes();
});

$("#vote2").click(function () {
    votes2++;
    updateVotes();
});

$("#vote3").click(function () {
    votes3++;
    updateVotes();
});

$("#vote4").click(function () {
    votes4++;
    updateVotes();
});

// Initial plot and update of the bar graph
function updateBarGraph(votesArray) {
    // Destroy previous chart instance if exists
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
                    'rgba(0, 123, 255, 0.5)', // bg-info color
                    'rgba(40, 167, 69, 0.5)', // bg-danger color
                    'rgba(23, 162, 184, 0.5)', // bg-success color
                    'rgba(255, 193, 7, 0.5)', // bg-warning color
                ],
                borderColor: [
                    'rgba(23, 162, 184, 1)', // bg-info color
                    'rgba(40, 167, 69, 1)', // bg-danger color
                    'rgba(23, 162, 184, 1)',  // bg-success color
                    'rgba(255, 193, 7, 1)', // bg-warning color
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

// Initial plot of the bar graph
updateBarGraph([votes1, votes2, votes3, votes4]);
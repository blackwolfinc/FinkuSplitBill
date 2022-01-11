import React, { Component } from 'react'
import Chart from "react-apexcharts";

export default class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPush : props.Data ,
      LableFrist : props.Lable ,
      series: [],
      
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
     
        labels: (props.Lable  ? props.Lable  : []),
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
      },


    };
  }


  componentDidMount(){
      let ArrayNow = []
      let lableThis =[]
    this.state.dataPush.map((Data)=>{
      ArrayNow.push(Data.UserSplit.length)
      lableThis.push(Data.name)
    })

    this.setState({
      labels:lableThis,
      series: ArrayNow
 
    });

    console.log("lable ",this.state.LableFrist)
  }



  render() {
    return (


      <div>
        <div className="chart-wrap">
          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="donut" width={380} />
          </div>
        </div>

        {/* <div class="actions">
          <button

            onClick={() => this.appendData()}
          >
            + ADD
          </button>
          &nbsp;
          <button

            onClick={() => this.removeData()}
          >
            - REMOVE
          </button>
          &nbsp;
          <button

            onClick={() => this.randomize()}
          >
            RANDOMIZE
          </button>
          &nbsp;
          <button

            onClick={() => this.reset()}
          >
            RESET
          </button>
        </div> */}
      </div>
    )
  }
}
import React, { Component } from 'react';
import Bar from './components/bar/Bar';
import { calculateSalaryFrom } from './helpers/salary';
import ViewTaxes from './components/viewTaxes/ViewTaxes';
import { getPercent } from './helpers/formatNumbers';
import css from './components/viewTaxes/viewtaxe.module.css';
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      totalSalary: 1000.0,
      calculateTaxes: {
        baseINSS: 1000,
        baseIRPF: 925,
        discountINSS: 75,
        discountIRPF: 0,
        netSalary: 925,
        percentINSS: 7.5,
        percentIRPF: 0,
        percentNetSalary: 92.5,
      },
    };
  }

  handleInputValue = (event) => {
    const newTotalSalary = Number(event.target.value);
    this.setState({
      totalSalary: newTotalSalary,
    });
  };

  componentDidUpdate = (_, previousState) => {
    const { totalSalary: oldTotalSalary } = previousState;
    const { totalSalary: newTotalSalary } = this.state;

    if (oldTotalSalary !== newTotalSalary) {
      const calculateTaxes = calculateSalaryFrom(newTotalSalary);
      this.setState({
        calculateTaxes: {
          baseINSS: calculateTaxes.baseINSS,
          baseIRPF: calculateTaxes.baseIRPF,
          discountINSS: calculateTaxes.discountINSS,
          discountIRPF: calculateTaxes.discountIRPF,
          netSalary: calculateTaxes.netSalary,
          percentINSS: getPercent(
            calculateTaxes.discountINSS,
            calculateTaxes.baseINSS
          ),
          percentIRPF: getPercent(
            calculateTaxes.discountIRPF,
            calculateTaxes.baseINSS
          ),
          percentNetSalary: getPercent(
            calculateTaxes.netSalary,
            calculateTaxes.baseINSS
          ),
        },
      });
    }
  };

  render() {
    const { totalSalary, calculateTaxes } = this.state;
    const { percentINSS, percentIRPF, percentNetSalary } = calculateTaxes;

    return (
      <div className="container">
        <h1 className={css.tittle}>React Salário</h1>

        <div className={css.input}>
          <label className={css.viewApp}>
            <span>Salário Bruto</span>
            <input
              className={css.inputMoney}
              autoFocus
              type="number"
              value={totalSalary}
              onChange={this.handleInputValue}
              name="quantity"
              min="0.00"
              step="100.00"
            />
          </label>
        </div>
        <ViewTaxes value={calculateTaxes} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Bar value={percentINSS} color="orange" />
          <Bar value={percentIRPF} color="red" />
          <Bar value={percentNetSalary} color="blue" />
        </div>

        <div className={css.divFooter}>
          <span>
            <a href="https://github.com/lsferreira934">GitHub </a>
            <a href="https://www.linkedin.com/in/lsferreira934/"> Linkedin</a>
          </span>
        </div>

        <footer className={css.footer}>
          <div>© 2020 Produzido por Leandro Ferreira</div>
        </footer>
      </div>
    );
  }
}

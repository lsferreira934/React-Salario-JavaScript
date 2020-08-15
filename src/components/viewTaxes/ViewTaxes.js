import React, { Component } from 'react';
import { formatReal } from '../../helpers/formatNumbers';
import css from './viewtaxe.module.css';
export default class ViewTaxes extends Component {
  render() {
    const { value } = this.props;
    const {
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = value;

    return (
      <div className={css.showInfos}>
        <div className={css.viewTaxes}>
          <h5>Base INSS</h5>
          <input readOnly type="text" value={formatReal(baseINSS)} />
        </div>

        <div className={css.viewTaxes}>
          <h5>Desconto INSS %</h5>
          <input
            className={css.INSS}
            readOnly
            type="text"
            value={`${formatReal(discountINSS)} (${
              isNaN(percentINSS) ? 0 : percentINSS
            }%)`}
          />
        </div>

        <div className={css.viewTaxes}>
          <h5>Base IRPF </h5>
          <input readOnly type="text" value={formatReal(baseIRPF)} />
        </div>

        <div className={css.viewTaxes}>
          <h5>Desconto IRPF %</h5>
          <input
            className={css.IRPF}
            readOnly
            type="text"
            value={`${formatReal(discountIRPF)} (${
              isNaN(percentIRPF) ? 0 : percentIRPF
            }%)`}
          />
        </div>

        <div className={css.viewTaxes}>
          <h5>Salário Líquido</h5>
          <input
            className={css.netSalary}
            readOnly
            type="text"
            value={`${formatReal(netSalary)} (${
              isNaN(percentNetSalary) ? 0 : percentNetSalary
            }%)`}
          />
        </div>
      </div>
    );
  }
}

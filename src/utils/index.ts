import {
  findReturnStrReg,
  findSvgTitleReg,
  findHeightWidthReg,
  findViewBoxReg,
} from '../regex';

const extractSvgHeightWidth = (svgTagStr: string) => {
  let width = '0';
  let height = '0';
  const res = svgTagStr.replace(findHeightWidthReg, ($1: string, type: string, value: string) => {
    if (type === 'width') {
      width = value;
    } else if (type === 'height') {
      height = value;
    }
    return '';
  });
  return {
    str: res,
    width,
    height,
  };
};

const getSvgName = (filename: string) => filename.replace('.svg', '');

export const clearReturnStr = (svgStr: string) => svgStr.replace(findReturnStrReg, '');

export const formatSvgTagAsSymbolTag = (
  svgStr: string,
  filename: string,
  idPrefix = '',
) => {
  const id = idPrefix ? `${idPrefix}-${getSvgName(filename)}` : getSvgName(filename);
  return svgStr
    .replace(findSvgTitleReg, ($1: string, svgTagStr: string) => {
      const extractRes = extractSvgHeightWidth(svgTagStr);
      if (!findViewBoxReg.test(extractRes.str)) {
        const { width, height } = extractRes;
        extractRes.str += `viewBox="0 0 ${width} ${height}"`
      }
      return `<symbol id="${id}" ${extractRes.str}>`
    })
    .replace('</svg>', '</symbol>');

};

export const isSvg = (name: string) => {
  const splitList = name.split('.');
  const fileType = splitList[splitList.length - 1];
  return fileType === 'svg';
};

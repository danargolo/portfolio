import * as S from './styles';

export default function Wave() {
  return(
    <S.svg xmlns="http://www.w3.org/2000/svg" width="1440" height="560" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 560">
      <defs>
        <filter id="shadow" x="20%" y="20%" width="250%" height="250%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="1" dy="1" result="offsetblur" />
          <feFlood floodColor="white" result="color"/>
          <feComposite in="color" in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <S.g fill="none">
          <path d="M1555.92 183.97C1391.98 185.39 1242.88 352.58 922 351.97 601.12 351.36 470.87-3.05 288.08-16.07" stroke="#1F3A5F" strokeWidth="2"></path>
          <path d="M1446.98 72.69C1316.93 83.46 1227.39 347.45 1002.92 347.09 778.46 346.73 706.53-30.28 558.87-59.36" stroke="#1F3A5F" strokeWidth="2"></path>
          <path d="M1521.84 367.91C1405.74 358.11 1345.13 130.97 1126.27 121.51 907.41 112.05 834.81-7.19 730.7-8.86" stroke="#1F3A5F" strokeWidth="2"></path>
          <path d="M1577.44 235.2C1389.5 230.95 1150.55-23.83 873.07-28 595.58-32.17 611.02-104.83 520.88-105.28" stroke="#1F3A5F" strokeWidth="2"></path>
          <path d="M1490.79 287.48C1385.01 291.03 1312.85 462.03 1102.18 455.48 891.52 448.93 861.52 14.16 713.58-39.15" stroke="#1F3A5F" strokeWidth="2"></path>
      </S.g>
      <S.g1 fill="none" strokeLinejoin="round" filter="url(#shadow)">
          <path strokeDasharray="4,1300" d="M1555.92 183.97C1391.98 185.39 1242.88 352.58 922 351.97 601.12 351.36 470.87-3.05 288.08-16.07" stroke="rgba(51,121,194,0.58)" strokeWidth="2"></path>
          <path strokeDasharray="4,1300" d="M1446.98 72.69C1316.93 83.46 1227.39 347.45 1002.92 347.09 778.46 346.73 706.53-30.28 558.87-59.36" stroke="rgba(51,121,194,0.58)" strokeWidth="2"></path>
          <path strokeDasharray="4,1300" d="M1521.84 367.91C1405.74 358.11 1345.13 130.97 1126.27 121.51 907.41 112.05 834.81-7.19 730.7-8.86" stroke="rgba(51,121,194,0.58)" strokeWidth="2"></path>
          <path strokeDasharray="4,1300" d="M1577.44 235.2C1389.5 230.95 1150.55-23.83 873.07-28 595.58-32.17 611.02-104.83 55.88-105.28" stroke="rgba(51,121,194,0.58)" strokeWidth="2"></path>
          <path strokeDasharray="4,1300" d="M1490.79 287.48C1385.01 291.03 1312.85 462.03 1102.18 455.48 891.52 448.93 861.52 14.16 713.58-39.15" stroke="rgba(51,121,194,0.58)" strokeWidth="2"></path>
      </S.g1>
    </S.svg>
  )
}
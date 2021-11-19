import { Line } from 'react-chartjs-2';
import React from 'react';
import {TiArrowSortedUp} from 'react-icons/ti'

export default function TopMovers() {
  const styles = {
    body: "px-24 py-12 h-full",
    title: "font-bold mb-6",
    cardBody: "shadow-lg bg-white rounded w-1/4 px-4 py-4",
    cardTitle: "font-semibold flex text-sm",
    logo: "w-6 mr-3",
    lastValue: "font-bold",
    change:"text-green-600 text-sm font-semibold flex align-middle"
  }
  const dataValue = [7315.25, 7315.25, 7369.6, 7201.81, 7336.96, 6775.21, 6870.2, 6740.88, 6801, 6666.16, 6428.54, 6406.91, 5882.7, 6258.01, 6378.4, 6728.44, 6694.73, 6775.57, 6500, 5839.44, 6208.45, 6205.18, 6191.02, 5420.45, 5343.07, 5035.56, 5343.45, 5169.05, 5653.03, 4830.45, 7935.49, 7881.02, 7932.95, 8038.84, 8902.65, 9158.02, 9067.35, 8757.05, 8751.88, 8912.92, 8528.4, 8525.13, 8704.88, 8809.86, 8780.08, 9311.4, 9665.85, 9977.24, 9675.67, 9703.44, 9610.11, 9597.25, 10187.97, 9705.1, 9933.8, 9903.34, 10372.74, 10245.39, 10352.74, 10269.46, 9860.08, 10168.41, 9912.53, 9816.97, 9761.36, 9615.04, 9167.01, 9278.51, 9321, 9380.6, 9330.55, 9497.68, 9280.04, 9399, 8901.8, 8583.74, 8330.01, 8425.18, 8391.37, 8664.08, 8716.76, 8627.64, 8700.66, 8907.78, 8900.45, 8715.01, 8813.5, 8827.01, 8110, 8173.14, 8023.48, 8190.89, 7820.01, 8042.02, 8158.5, 7762.72, 7351.77, 7352.82, 7333, 6944.9, 7175.2, 7165.9, 7216.27, 7390.42, 7300.7, 7241.66, 7195.83, 7192.6, 7260.75, 7316.57, 7513.12, 7140.34, 7186.87, 7155, 7292.61, 6615.06, 6881.25, 7120.14, 7072.7, 7250.14, 7193.42, 7200.5, 7221.4, 7340.21, 7528.05, 7500, 7543.71, 7393.19, 7192.73, 7301.37, 7301.55, 7400.18, 7554.19, 7758.35, 7430.53, 7520.11, 7162.9, 7121.7, 6912.89, 7329.11, 7286.95, 7615, 8079, 8120.8, 8174.11, 8500, 8479.81, 8457.18, 8626.66, 8761.75, 8814.3, 8721.54, 9040.12, 8809.33, 8768.14, 9202.17, 9350.07, 9318.5, 9415.61, 9200, 9307.58, 9246.88, 9154, 9171.01, 9432.41, 9219.51, 9547.18, 9272.28, 8670.24, 7458.57, 7468.81, 8023.14, 8212.76, 8227, 7960, 7960.68, 8074.43, 8002.22, 8162.95, 8355.87, 8275.99, 8314.22, 8272.76, 8589.51, 8592.01, 8188.17, 8208.67, 7860.01, 8150.97, 8157.3, 8206.45, 8384.51, 8330.62, 8301.76, 8056.19, 8227.28, 8197, 8065.1, 8431.9, 8543.36, 9693.28, 10031.31, 9980.93, 10168.86, 10239.97, 10162.8, 10192, 10271.26, 10314.68, 10360.29, 10359.27, 10432.63, 10161.12, 10100, 10313.99, 10406.94, 10483.37, 10351, 10600, 10584.13, 10625.2, 10392.28, 9773.12, 9604.43, 9581.96, 9488.28, 9726.85, 10175.8, 10367.23, 10135.59, 10151.83, 10408.14, 10164.82, 10132.44, 10747.06, 10919.99, 10317.97, 10198.84, 10360.22, 10297.86, 10016.88, 10857.49, 11381.51, 11527.27, 11284.24, 11857.08, 11841.61, 11972.53, 11464.34, 11815.28, 10975, 10817.34, 10528.81, 10409.99, 10079.54, 9599.07, 9504.23, 9523.42, 9478.3, 9851.02, 9910.54, 9770.17, 9842.72, 10326.64, 10590, 10753.17, 10535.46, 10647.85, 9703.58, 9429.05, 10850, 10200.8, 11374.76, 11776.4, 11320.13, 12097.34, 12570.42, 12307.13, 11475.07, 11242.22, 10997.3, 11144.85, 11987.32, 10833.82, 10451.1, 10746, 11885.94, 12388.24, 11143.74, 12936.45, 11759.9, 11035, 10842.82, 10676.48, 10233.92, 9534.88, 9282.65, 9084.31, 9331.03, 8989.89, 8853.3, 8699.71, 8256.09, 8176.44, 7920.63, 8024.35, 7643.46, 7936.35, 8002.98, 7801, 7791.42, 7682.81, 8110.99, 8745.75, 8566.1, 8516.2, 8273.76, 8659.18, 8726.4, 8781.16, 8750.01, 8074.87, 8004.36, 7879.92, 7620, 7954.49, 8003.97, 8192.44, 7262.52, 7361.92, 7881.38, 8198.47, 7995.48, 7822.67, 6976.25, 7227.75, 6378.01, 6146.18, 5935.1, 5745, 5686.65, 5715.3, 5769.51, 5660.3, 5391.01, 5329.97, 5266.34, 5149.86, 5157.02, 5174.18, 5140.38, 5138.43, 5445.16, 5538.25, 5390, 5296.26, 5321.31, 5286.63, 5283.73, 5246.1, 5203.65, 5036.86, 5161.51, 5069.48, 5091.58, 5044.68, 5319.55, 5194.98, 5287.88, 5196.02, 5044.56, 5041, 4907.68, 4976.94, 4903.3, 4136.54, 4095.01, 4094.03, 4082.72, 4012.81, 4027.35, 3919.99, 3908.7, 3971.53, 3982.45, 3986.67, 3975.01, 4032, 4001.3, 3969.99, 3965.45, 3990, 3901, 3855.87, 3850.96, 3862.12, 3851.15, 3899.07, 3917.49, 3842, 3855.26, 3850.46, 3845.73, 3700.82, 3789.61, 3812.45, 3808.12, 3791.49, 3800, 3799.99, 3820.26, 3732.48, 4110.99, 3946.56, 3901.59, 3941.16, 3892.03, 3866.99, 3626.7, 3582.3, 3567.12, 3562.29, 3576.48, 3588.61, 3588.58, 3647.21, 3624.11, 3622.59, 3359.99, 3366.83, 3429.98, 3411.47, 3415.99, 3469.06, 3441.87, 3412.1, 3436.11, 3395.49, 3429.7, 3529.63, 3558.19, 3561, 3570.25, 3553.02, 3577.24, 3532.25, 3533.49, 3687, 3608, 3641.4, 3604.57, 3583.47, 3662.89, 3514.08, 3618.82, 3637.28, 3626.76, 4000.67, 3992.24, 4007.47, 4041.01, 3797.41, 3821.47, 3786.91, 3890.45, 3823.63, 3692.35, 3826.96, 3729.57, 3889.2, 3588.67, 3808.85, 3777.97, 4036, 3948.58, 3979.35, 3839.06, 4077.29, 3683.97, 3667.82, 3502.84, 3193, 3184.06, 3195.43, 3265.44, 3431.89, 3356.01, 3411.6, 3529.66, 3394.5, 3377.83, 3436.54, 3691.92, 3903.94, 3835.01, 4101.25, 4141.59, 3984.01, 4240.53, 4223.69, 3771.43, 3730.44, 3933.57, 3789.99, 4288.25, 4263.29, 4546.67, 4355.22, 4733.82, 5560.42, 5503.64, 5515.77, 5572.71, 5606.38, 6258.26, 6326.27, 6360.98, 6350.23, 6335, 6405.88, 6501.5, 6448.41, 6403.38, 6425.09, 6332.46, 6350.98, 6344.3, 6305.58, 6270.43, 6263.67, 6404.8, 6410.01, 6401.09, 6389.7, 6412, 6395.25, 6407.43, 6412.64, 6413.23, 6386.29, 6391.01, 6439, 6428.43, 6437.66, 6181.54, 6195, 6202.22, 6153.83, 6529.75, 6593.48, 6600, 6573.17, 6545.49, 6581.37, 6549.03, 6465.97, 6498.88, 6573.94, 6597.94, 6580.22, 6621.37, 6682.87, 6455.44, 6433.42, 6577.78, 6702.64, 6710.26, 6759.51, 6495.87, 6383.42, 6339.92, 6251.56, 6498.37, 6530.08, 6523.38, 6485, 6324.13, 6278.84, 6300, 6243.21, 6185.27, 6395.85, 6496.37, 6688.01, 7354.92, 7252.41, 7284.57, 7196.18, 7017.1, 6977.96, 7033.83, 7075.1, 6909, 6706.31, 6730.95, 6692, 6524.17, 6350, 6476.53, 6258.36, 6491.5, 6389.99, 6580.76, 6313.83, 6269.74, 6196.17, 6257.31, 6091.87, 6091.87, 6109.19, 6540.47, 6274.5, 6720.18, 6931.59, 7032.06, 7014.55, 7413.7, 7536, 7602.14, 7725.05, 8166.86, 8216.06, 8234.98, 8192.21, 7926.36, 8160, 8400.73, 7713.62, 7400.37, 7408.79, 7334.8, 7466.58, 7378.55, 7322.78, 6729.22, 6347.99, 6250.02, 6203.79, 6249.75, 6380, 6299, 6666, 6700.88, 6754.14, 6582.51, 6529.47, 6583.72, 6508.36, 6615.13, 6345.53, 6389.01, 6202.49, 5850.13, 6135.8, 6060.01, 6242.53, 6149.99, 6172.55, 6076.88, 6717.88, 6758.31, 6740.96, 6711.16, 6444.35, 6486.86, 6388.98, 6639.66, 6297.7, 6550, 6878, 6770, 7501.64, 7647.08, 7691.26, 7657.92, 7610, 7500, 7709.99, 7643.52, 7521.01, 7484.84, 7387.88, 7460, 7098.11, 7349.12, 7333.2, 7462.65, 7572.49, 7497.47, 7985.77, 8395.71, 8515.17, 8240.01, 8230, 8060.01, 8344.94, 8475.58, 8682.73, 8685.5, 8466.31, 8398.44, 9017.58, 9308.45, 9181.42, 9361.96, 9599.88, 9812.81, 9691.37, 9727.5, 9211.7, 9059.84, 9244.38, 9393.29, 9343.83, 8926, 9281.95, 8865.01, 9649.99, 8933, 8800, 8920, 8855.49, 8269.3, 8167, 7894, 8052.27, 8357.43, 7998.07, 7875.94, 7920.39, 6939.43, 6830.68, 6771.01, 7022.72, 6895.99, 6564.06, 6777, 6794.31, 7418.53, 7049.99, 6811.02, 6920.5, 6838.71, 7086.6, 7941.87, 7794.46, 8149.46, 8457.04, 8540.33, 8925, 8710.44, 8902.53, 8904.23, 8599.01, 8197.29, 7870.99, 8265.81, 8266.99, 8198.82, 9146.18, 9105, 9530.94, 8769.2, 9257, 9295.77, 9884.26, 10696.87, 11400.01, 11467.19, 11433.72, 11027.77, 10900.95, 10296.86, 10562.46, 10300, 9595, 9697.21, 10161.62, 9829.96, 10475, 11206.22, 11166.92, 10403.01, 11100, 10183.63, 10017.18, 9480.27, 8519.07, 8900, 8073.9, 8553.5, 8697.78, 8200, 7582.76, 7682.75, 6892.67, 8162.94, 9221.14, 8845.07, 9000.73, 10112.6, 10007.42, 11130.34, 11633.11, 11372.85, 11091.99, 11114, 11346.58, 10820.81, 10780, 11501, 12744.98, 11535.56, 11298, 11240.19, 11399.01, 13597.6, 13626.27, 14174.38, 13815.26, 13301.77, 14929.39, 14477.55, 14980.01, 16150.15, 17175, 16945.5, 15199.99, 15148.92, 14740.09, 13338.41, 13820.26, 12675.68, 14574.99, 14488.61, 15418.95, 15830.86, 13986.68, 14100.01, 15002.72, 14000, 15797.49, 16596.09, 17640.01, 18981.88, 19260.5, 19499.99, 17744.5, 16678.79, 16460.9, 17382.19, 16800.19, 15268.98, 15041, 16250, 17050, 13725.53, 11711.2, 11668.84, 11231.21, 10888.01, 10910.18, 9934.4, 9827.29, 9941.7, 9763.44, 9304.19, 8779.62, 8209.88, 8009.88, 8240.82, 8120.36, 8246.01, 8046.98, 7776.54, 7677.17, 7852.44, 7286.93, 6606.75, 6550.76, 5849.37, 6340, 6585.11, 7151.49, 7465.53, 7109.7, 6975.01, 7394.44, 7371.55, 7177.28, 7037.48, 6741.02, 6448.36, 6124.69, 6132.76, 5730.01, 5765.32, 5889.42, 5741.66, 5517.21, 5899.6, 5974.97, 6012.58, 5984.03, 5695.01, 5569.33, 5592.26, 5748.56, 5694.61, 5799.99, 5636.28, 5437.68, 4813.85, 4756.22, 4751.08, 4602.5, 4425.01, 4362.42, 4318.57, 4214.25, 4300, 4385.7, 4388.74, 4327.63, 4182.9, 4188, 4204.51, 3885.14, 3916.48, 3667.99, 3783.6, 3620.96, 3616.74, 3866, 3903.4, 4098.03, 3716.46, 3715.38, 3709.85, 3242.63, 3855.01, 4155.55, 4209.69, 4243.48, 4325.17, 4346.24, 4623.19, 4609.17, 4393, 4278.86, 4607.47, 4642.85, 4924, 4736.28, 4583.85, 4589.99, 4379.96, 4340.88, 4371.25, 4371.25, 4313.21, 4147.1, 4093.28, 3993.87, 4049.98, 4145.11, 4102.48, 4284.45, 4322.44, 4154.84, 4318.3, 4046.34, 3863.3, 3639.99, 3421.45, 3348.99, 3421.11, 3391.48, 3218.74, 3252.34, 2844.99, 2783.43, 2703.44, 2730, 2871.27, 2749.99, 2706.14, 2786.19, 2662.99, 2524.52, 2558.27, 2758.5, 2761.45, 2838.07, 2661.99, 2889.98, 2264.29, 2304.36, 2229.07, 1904, 1967.34, 2213.01, 2343.48, 2383.82, 2305.05, 2329.4, 2501.02, 2547.77, 2493.79, 2605.53, 2625.06, 2606.64, 2540.94, 2507.84, 2416.12, 2456.01, 2549.89, 2554.97, 2573.77, 2415.62, 2497.6, 2572.96, 2684.63, 2689.58, 2645.1, 2734.14, 2594.99, 2519.87, 2638.24, 2484.64, 2416.16, 2459.56, 2715.86, 2656.3, 2960, 2903.77, 2807.01, 2800, 2690, 2880.23, 2689.43, 2520.05, 2554.91, 2484.04, 2412.34, 2303.62, 2197.33, 2284.3, 2230.77, 2096.77, 2267.37, 2330.84, 2436.45, 2261.22, 2101.33, 2026, 2044.4, 1965.01, 1895.55, 1812.57, 1769.71, 1742.67, 1794.01, 1781.71, 1694.64, 1834.1, 1793.26, 1719.51, 1686.39, 1602.17, 1580.99, 1546.93, 1550, 1517.95, 1464.94, 1440.82, 1362.63, 1351.08, 1347.19, 1346.04, 1294.91, 1282.56, 1255.71, 1247.83, 1247.66, 1250, 1238.45, 1211.45, 1204, 1193.81, 1178.01, 1174.69, 1175.5, 1177.88, 1218.12, 1223.76, 1210.64, 1210.08, 1184.5, 1194.67, 1195.77, 1134.73, 1149.03]
  const data = {
  labels: dataValue,
  datasets: [
    {
      data: dataValue,
      fill: false,
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 1 
    },
  ],
};

  const options = {
    aspectRatio: 3,
    responsive: true,
    elements: {
      point:{radius: 0}
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip:{enabled: false},
    },
    scales: {
      legend: { display: false },
      x: {
        grid: {
          display: false,
          drawBorder: false 
        },
        ticks: {display: false}
     },
      y: {
        grid: {
          display: false,
          drawBorder: false 
        },
        ticks: {display: false}
      }
    }
  };
 
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers (24h)</h1>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <img className={styles.logo} alt="logo" src="data:image/png;base64,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"/>
          BitCoin
        </div>
        <div className={styles.chart}>
            <Line data={data} options={options} />
        </div>
        <div className={styles.lastValue}>${dataValue[dataValue.length-1]}</div>
        <div className={styles.change}>+$1.232 (+21.0% <TiArrowSortedUp/>)</div>
      </div>
    </div>
  )
}
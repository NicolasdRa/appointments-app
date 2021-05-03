import React, { CSSProperties } from 'react';

export const Logo = () => {
  return (
    <svg viewBox='0 0 170 71' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M51.5775 43.3436C52.2175 45.1568 52.5934 46.8182 52.705 48.3277C52.7339 48.7173 52.7452 49.0918 52.7392 49.4513C52.6915 51.2338 52.1402 52.164 51.0851 52.2421C50.7767 52.2649 50.4223 52.2177 50.0219 52.1004C47.3991 51.2825 44.4636 46.016 41.2152 36.3008C40.5049 34.199 39.2966 30.3307 37.5905 24.6957C36.2702 20.3052 35.3014 17.3576 34.6841 15.8528C35.0526 21.7173 34.411 29.5904 32.7592 39.4723C31.923 44.4956 30.968 48.3526 29.894 51.0433C28.8477 53.6667 27.7564 55.0204 26.6202 55.1044C26.3767 55.1225 26.1291 55.0837 25.8772 54.988C23.3259 54.0343 20.8121 48.6223 18.3357 38.7521C15.3088 26.7356 13.6235 20.3892 13.2797 19.7128C12.5093 22.3158 11.9274 27.9078 11.534 36.4889C11.1333 44.9726 10.562 50.3761 9.81988 52.6995C9.42058 53.9205 8.86383 54.5574 8.14964 54.6102C7.72762 54.6414 7.24069 54.4571 6.68886 54.0573C5.39343 53.0923 4.50865 51.7215 4.03451 49.945C3.8344 49.2254 3.69712 48.3624 3.62268 47.356C3.38374 44.1259 3.77949 39.4371 4.80993 33.2897L4.81173 33.314L6.44143 22.2506C7.08573 17.9433 7.58738 15.2378 7.94639 14.134C8.65058 11.9603 9.77553 10.4001 11.3212 9.45339C11.9453 9.06449 12.5657 8.84723 13.1825 8.80161C14.3025 8.71876 15.4065 9.192 16.4945 10.2213C18.8821 12.4928 20.8817 17.241 22.4933 24.466C22.8839 26.2161 23.4472 29.0876 24.1832 33.0807C24.8063 36.4292 25.2975 38.7675 25.6569 40.0956C25.8591 37.9753 26.3609 33.2868 27.1624 26.0302C27.8598 19.7931 28.3028 15.4109 28.4912 12.8836C28.7512 9.33915 29.0259 7.20533 29.3151 6.48215C30.0536 4.55067 31.7294 3.48827 34.3427 3.29497L34.6106 3.27516C36.6273 5.16604 38.5267 8.33861 40.3087 12.7929C42.9543 19.4354 46.7106 29.619 51.5775 43.3436ZM81.4144 53.8176C81.817 55.73 82.0681 57.3598 82.1678 58.707C82.2506 59.827 82.2286 60.7426 82.1017 61.4537C81.6211 64.0026 79.8904 66.3094 76.9096 68.3742C75.451 69.396 73.8615 69.9705 72.1409 70.0978C67.9531 70.4076 63.5859 68.2907 59.0391 63.7472C58.4879 63.1352 58.0813 62.3819 57.8192 61.4873C57.7081 61.0875 57.6399 60.7172 57.6147 60.3763C57.5786 59.8894 57.6292 59.4695 57.7663 59.1166C58.0291 58.477 58.4932 58.1325 59.1587 58.0833C59.6294 58.0485 60.1921 58.1538 60.8467 58.3991C63.3331 59.3576 65.7635 60.4427 68.138 61.6543C69.8007 62.5105 71.184 62.8978 72.2878 62.8162C73.213 62.7477 73.9419 62.3429 74.4746 61.6017C75.4348 60.2414 75.7895 57.865 75.5385 54.4726C75.2744 50.9016 74.3488 46.2208 72.7617 40.4302C72.2464 41.1864 71.5507 42.3721 70.6746 43.9874C69.4823 46.1809 68.4872 47.7315 67.6894 48.6392C66.3666 50.1733 64.7915 51.1629 62.9639 51.6082C62.5629 51.7032 62.1757 51.7644 61.8024 51.792C60.3578 51.8989 59.1687 51.4891 58.2352 50.5626C56.932 49.2717 56.1573 46.9626 55.9112 43.6351C55.7875 41.9632 55.7988 40.0202 55.9451 37.8061C56.0252 36.4619 56.4099 34.4913 57.0991 31.8944C58.1317 27.9827 59.3703 25.9734 60.8149 25.8665C61.7077 25.8005 62.5721 26.4546 63.4082 27.829L63.4713 28.0202C63.5985 29.7407 63.3695 32.271 62.7843 35.6111C62.2242 38.8513 62.0121 41.3885 62.1477 43.2227C62.1645 43.45 62.1889 43.6685 62.2207 43.8783C63.5794 43.2719 64.8658 41.7976 66.0798 39.4556C66.7929 38.0646 67.7328 35.7673 68.8994 32.5638C69.998 29.5448 70.8423 27.4994 71.4321 26.4276C72.3948 24.6591 73.428 23.734 74.5317 23.6523C74.7427 23.6367 74.9562 23.6536 75.172 23.7029L75.2937 23.6939C75.6346 23.6687 76.0055 23.8289 76.4064 24.1746C78.0288 25.5887 79.2357 31.6441 80.0269 42.3408L80.2718 45.6521C80.4195 47.6486 80.5411 48.9616 80.6366 49.591C80.7772 50.6088 81.0365 52.0177 81.4144 53.8176ZM99.4476 36.106C97.8514 36.8116 96.3734 37.6799 95.0134 38.7107C93.327 39.9616 92.3819 41.0842 92.178 42.0785C92.1413 42.2444 92.1289 42.4085 92.1409 42.5709C92.1686 42.9442 92.3242 43.2836 92.6079 43.589L93.2707 43.6134C94.6991 43.5077 96.0774 42.6143 97.4055 40.9329C98.6724 39.3051 99.3531 37.6961 99.4476 36.106ZM112.069 40.9254C113.513 42.3527 114.274 43.5939 114.352 44.649C114.376 44.9736 114.334 45.2868 114.225 45.5886C113.502 47.5026 112.556 48.5029 111.387 48.5893C109.975 48.6938 107.936 46.9352 105.269 43.3135C104.616 42.4315 104.156 41.8372 103.888 41.5305C102.563 45.0232 99.6587 47.5637 95.1738 49.1522C93.0906 49.8938 91.1563 50.3307 89.3708 50.4627C86.8387 50.65 85.5168 49.9889 85.4051 48.4794C85.2038 47.7435 85.0755 47.0023 85.0203 46.2556C84.6721 41.5484 87.3884 36.9001 93.1691 32.3108C93.4781 32.0758 94.1839 31.689 95.2865 31.1505C98.0118 29.8228 99.3492 28.8181 99.2987 28.1363C99.1059 27.0734 98.9308 25.4788 98.7735 23.3525C98.6943 22.2812 98.6216 21.0788 98.5557 19.7454C98.4645 18.0712 98.378 16.6821 98.2964 15.5784C98.2351 14.7506 98.1778 14.0857 98.1243 13.5837L98.082 13.342C98.0087 12.7925 97.9535 12.2662 97.9162 11.763C97.6821 8.59785 98.0148 6.47606 98.9142 5.39765C99.5281 4.65046 100.387 4.23605 101.491 4.1544C101.669 4.14119 101.848 4.1361 102.028 4.13913C102.567 4.1482 103.105 4.5817 103.642 5.43962C104.088 6.17369 104.397 6.92609 104.568 7.69681C104.954 9.38192 105.3 12.3021 105.608 16.4575L105.714 17.894C105.755 18.4458 105.809 19.2905 105.877 20.4279C105.908 21.0621 105.944 21.6714 105.988 22.2558C106.267 26.0378 106.707 28.8858 107.305 30.8C108.253 33.9124 109.841 37.2875 112.069 40.9254ZM123.949 31.6987C123.489 32.7609 123.307 33.9494 123.404 35.2642L123.43 35.6051C123.571 37.0797 123.989 38.3056 124.681 39.2825C125.32 40.1982 126.037 40.6266 126.832 40.5678C127.725 40.5017 128.63 39.8309 129.548 38.5553C130.495 37.2449 130.963 35.6191 130.95 33.6779C130.947 33.417 130.936 33.1648 130.918 32.9213C130.798 31.2981 130.321 29.9217 129.487 28.792C128.998 28.1427 128.396 27.8445 127.682 27.8973C126.838 27.9597 126.008 28.4292 125.191 29.3056C124.404 30.1309 123.99 30.9286 123.949 31.6987ZM127.873 21.5427C130.454 21.3518 132.587 22.1732 134.274 24.0069C135.96 25.8407 136.923 28.3888 137.165 31.6514C137.449 35.4983 136.711 38.9802 134.951 42.0971C132.956 45.574 130.221 47.441 126.748 47.6979C126.066 47.7484 125.363 47.7269 124.638 47.6337C121.855 47.301 119.739 45.7194 118.289 42.8889C117.315 40.9699 116.732 38.7199 116.541 36.1391C116.493 35.4898 116.468 34.8225 116.467 34.1372C116.463 30.5632 117.463 27.6414 119.466 25.3716C121.451 23.0867 124.107 21.8212 127.435 21.5751L127.873 21.5427ZM148.164 36.0032C148.857 37.6493 150.12 38.4045 151.955 38.2688C152.247 38.2472 152.553 38.2 152.874 38.1273C154.386 37.8197 156.702 36.8079 159.823 35.0918C163.086 33.3163 165.246 32.2915 166.303 32.0175C166.639 31.9274 166.945 31.8721 167.221 31.8517C168.617 31.7484 169.411 32.4486 169.604 33.9521C169.33 37.0896 165.447 40.4125 157.954 43.9207C155.462 45.0843 153.225 45.7394 151.245 45.8858C148.145 46.1152 145.655 45.108 143.775 42.8642C142.433 41.2662 141.634 39.1872 141.38 36.6274L141.337 36.0431C141.172 33.8193 141.431 31.5806 142.113 29.3269C142.874 26.8225 144.012 24.7717 145.526 23.1746C147.132 21.5053 148.934 20.5968 150.93 20.4491L151.101 20.4365C152.951 20.2997 154.217 20.9812 154.899 22.4812C155.076 22.8762 155.177 23.2522 155.203 23.6093C155.284 24.6969 154.71 25.6614 153.483 26.5029C150.955 28.2893 149.421 29.5044 148.881 30.1482C147.937 31.2789 147.515 32.526 147.616 33.8894C147.665 34.5549 147.848 35.2595 148.164 36.0032Z'
        fill='#6EBBCF'
      />
    </svg>
  );
};

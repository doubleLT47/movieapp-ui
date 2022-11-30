import { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";
import formatCountdownTime from "../../utils/formatCoutdownTime";
import "./payment.scss";

function Payment() {
  const [time, setTime] = useState(10*60); // 10 minutes
  const [isCopy, setIsCopy] = useState(false);
  useEffect(()=>{
    let timer = setInterval(() => {
      setTime(time => time - 1);
    }, 1000)
    return () => clearInterval(timer);
  }, [])
  const copyTranferCode = () => {
    navigator.clipboard.writeText("123456789");
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 1500);
  }
  return (
    <div className="payment">
        <div className="payment__wrapper">
            <div className="payment__inner">
                <div className="payment__left">
                    <div className="countdount">Đơn hàng hết hạn sau:<span>{formatCountdownTime(time)}</span></div>
                    <h1 className="account__name">Tên chủ tài khoản: <span>Nguyễn Vinh Tiếng</span></h1>
                    <p className="info amount">Số tiền: <span>100.000 VNĐ</span></p>
                    <p className="info id">Đơn hàng: <span>108t3o21iuy213</span></p>
                    <a className="back">Quay lại</a>
                </div>
                <div className="payment__right">
                    <h2>Quét mã để thanh toán</h2>
                    <div className="img"><img src="/qr.png" alt="QR code"/></div>
                    <p className="money">Số tiền: <span>120.000 VNĐ</span></p>
                    <p className="note">Sử dụng camera diện thoại hoặc ứng dụng momo để quét mã</p>
                    <div className="content">
                      Nội dung chuyển khoản 
                      <span>HJOPHV</span>
                      <span className="copy" onClick={copyTranferCode}>
                        {isCopy ? (<i>Copied</i>) : <IoCopy />}
                      </span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
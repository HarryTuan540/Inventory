import React from 'react';
import PropTypes from 'prop-types';
import {
    Table, CardFooter, Button
} from 'reactstrap';

ListCreatePXK.propTypes = {
    onSubmit: PropTypes.func,
    data: PropTypes.array,
};

ListCreatePXK.defaultProps = {
    onSubmit: null,
    data: null,
}

function ListCreatePXK(props) {

    const { onSubmit, data } = props;
    const dataKienHang = data !== null ? data : [];

    const handleSubmit = () => {
        onSubmit();
    }

    return (
        <>
            <Table responsive hover size="sm">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Số lượng</th>
                        <th>Khối lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th>Trạng thái</th>
                        <th>Loại</th>
                        <th>Kho chứa hàng</th>
                        <th>Địa chỉ kho hàng</th>
                        <th>Thông tin người nhận</th>
                        <th>Thông tin người gửi</th>

                        
                    </tr>
                </thead>
                <tbody>
                    {
                        dataKienHang.map((dataList, index) => {
                            const { tenkienhang, soluongkienhang, khoiluongkienhang,
                                trangthai, 
                                loaikienhang, khochuakienhang, diachikhochua, 
                                tennguoinhan, sdtnguoinhan, diachinguoinhan,
                                tennguoigui, sdtnguoigui, diachinguoigui, dongia } = dataList //destructuring

                                const dongiaConvert = (dongia).split(",").join("");
                                const thanhtien =new Intl.NumberFormat().format(parseFloat(dongiaConvert, 10)*parseFloat(soluongkienhang, 10)*parseFloat(khoiluongkienhang, 10));
                            return (
                                <tr
                                    key={index}
                                >
                                    <td>{index + 1}</td>
                                    <td>{tenkienhang}</td>
                                    <td>{soluongkienhang}</td>
                                    <td>{khoiluongkienhang}</td>
                                    <td>{dongia}</td>
                                    <td>{thanhtien}</td>
                                    <td>{trangthai}</td>
                                    <td>{loaikienhang}</td>
                                    <td>{khochuakienhang}</td>
                                    <td>{diachikhochua}</td>
                                    <td>{`Tên: ${tennguoinhan}, SDT: ${sdtnguoinhan}, Địa chỉ: ${diachinguoinhan}`}</td>
                                    <td>{`Tên: ${tennguoigui}, SDT: ${sdtnguoigui}, Địa chỉ: ${diachinguoigui}`}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={handleSubmit}><i className="fa fa-dot-circle-o"></i>Tạo phiếu xuất kho</Button>
            </CardFooter>
        </>
    );
}

export default ListCreatePXK
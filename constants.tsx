import { CurriculumGrade, GradeCode, SubjectCode, LevelCode } from "./types";

export const GRADE_MAP: Record<GradeCode, string> = {
  "6": "Lớp 6",
  "7": "Lớp 7",
  "8": "Lớp 8",
  "9": "Lớp 9",
  "0": "Lớp 10",
  "1": "Lớp 11",
  "2": "Lớp 12"
};

export const GRADE_TO_CODE: Record<string, string> = {
  "6": "6", "7": "7", "8": "8", "9": "9", "10": "0", "11": "1", "12": "2"
};

export const CODE_TO_GRADE: Record<string, string> = {
  "6": "6", "7": "7", "8": "8", "9": "9", "0": "10", "1": "11", "2": "12"
};

export const SUBJECT_MAP: Record<SubjectCode, string> = {
  "D": "Đại số / Xác suất - Thống kê / Tổ hợp",
  "H": "Hình học & đo lường",
  "C": "Chuyên đề",
  "X": "Xác suất & Thống kê"
};

export const LEVEL_MAP: Record<LevelCode, string> = {
  "N": "Nhận biết",
  "H": "Thông hiểu",
  "V": "Vận dụng",
  "C": "Vận dụng cao"
};

export const CURRICULUM_DATA: Record<string, CurriculumGrade> = {
 "6": { "code": "6", "title": "Lớp 6",
  "chapters": [
   { "code": "C1", "title": "Chương 1: Tập hợp các số tự nhiên", "lessons": [
    { "code": "1", "title": "Bài 1: Tập hợp", "types": [
     { "code": "1", "title": "Viết tập hợp, nhận biết phần tử của tập hợp" },
     { "code": "2", "title": "Tập hợp con" },
     { "code": "3", "title": "Số phần tử của một tập hợp; tập hợp rỗng" }
    ]},
    { "code": "2", "title": "Bài 2: Cách ghi số tự nhiên", "types": [
     { "code": "1", "title": "Đọc, viết số tự nhiên; giá trị của chữ số; số chục, số trăm; biểu diễn số dưới dạng tổng" },
     { "code": "2", "title": "Số La Mã" },
     { "code": "3", "title": "Viết số tự nhiên thỏa điều kiện cho trước; đếm số các số" },
     { "code": "4", "title": "Hệ đếm cơ số khác 10 (hệ nhị phân, hệ cơ số b)" },
     { "code": "5", "title": "Bài toán nâng cao về cấu tạo số: tìm chữ số, dãy chữ số" }
    ]},
    { "code": "3", "title": "Bài 3: Thứ tự trong tập hợp các số tự nhiên", "types": [
     { "code": "1", "title": "So sánh, sắp xếp các số tự nhiên; biểu diễn trên tia số" },
     { "code": "2", "title": "Số liền trước, số liền sau; các số tự nhiên liên tiếp" },
     { "code": "3", "title": "Tìm số tự nhiên, tìm chữ số thỏa điều kiện về thứ tự" }
    ]},
    { "code": "4", "title": "Bài 4: Phép cộng và phép trừ số tự nhiên", "types": [
     { "code": "1", "title": "Thực hiện phép cộng, phép trừ; tính nhẩm, tính nhanh" },
     { "code": "2", "title": "Tìm số tự nhiên x" },
     { "code": "3", "title": "Tính tổng dãy số cách đều" },
     { "code": "4", "title": "Bài toán thực tế" },
     { "code": "5", "title": "Bài toán nâng cao: điền chữ số, so sánh không cần tính, toán vui" }
    ]},
    { "code": "5", "title": "Bài 5: Phép nhân và phép chia số tự nhiên", "types": [
     { "code": "1", "title": "Thực hiện phép nhân, phép chia; tính nhẩm, tính nhanh" },
     { "code": "2", "title": "Tìm số tự nhiên x" },
     { "code": "3", "title": "Phép chia hết, phép chia có dư (a = bq + r)" },
     { "code": "4", "title": "Bài toán thực tế" },
     { "code": "5", "title": "Dãy số, tổng dãy số" },
     { "code": "6", "title": "Bài toán nâng cao: điền chữ số, so sánh không cần tính, toán vui" }
    ]},
    { "code": "6", "title": "Bài 6: Luỹ thừa với số mũ tự nhiên", "types": [
     { "code": "1", "title": "Viết gọn tích bằng luỹ thừa; cơ số, số mũ; tính luỹ thừa; viết số dưới dạng luỹ thừa, tổng các luỹ thừa của 10" },
     { "code": "2", "title": "Nhân, chia hai luỹ thừa cùng cơ số; viết kết quả phép tính dưới dạng một luỹ thừa" },
     { "code": "3", "title": "So sánh các luỹ thừa, các biểu thức chứa luỹ thừa" },
     { "code": "4", "title": "Tìm số tự nhiên n, x trong đẳng thức, bất đẳng thức chứa luỹ thừa" },
     { "code": "5", "title": "Bài toán nâng cao: số chính phương, chữ số tận cùng, tổng các luỹ thừa" },
     { "code": "6", "title": "Bài toán thực tế về luỹ thừa" }
    ]},
    { "code": "7", "title": "Bài 7: Thứ tự thực hiện các phép tính", "types": [
     { "code": "1", "title": "Thực hiện phép tính, tính giá trị biểu thức (có ngoặc, luỹ thừa); tính hợp lí" },
     { "code": "2", "title": "Tìm số tự nhiên x" },
     { "code": "3", "title": "Bài toán thực tế" }
    ]}
   ]},
   { "code": "C2", "title": "Chương 2: Tính chia hết trong tập hợp các số tự nhiên", "lessons": [
    { "code": "8", "title": "Bài 8: Quan hệ chia hết và tính chất", "types": [
     { "code": "1", "title": "Ước và bội: tìm ước, tìm bội của một số; nhận biết ước, bội" },
     { "code": "2", "title": "Tìm số tự nhiên x thỏa điều kiện về ước, bội (x ∈ B(a), x ∈ Ư(a), a ⋮ (x + b), …)" },
     { "code": "3", "title": "Tính chất chia hết của một tổng, một hiệu; tìm điều kiện để tổng chia hết" },
     { "code": "4", "title": "Chứng minh chia hết; bài toán nâng cao về quan hệ chia hết" },
     { "code": "5", "title": "Bài toán thực tế về chia hết, ước và bội" }
    ]},
    { "code": "9", "title": "Bài 9: Dấu hiệu chia hết", "types": [
     { "code": "1", "title": "Nhận biết số chia hết cho 2, 5, 3, 9 (dấu hiệu chia hết)" },
     { "code": "2", "title": "Xét tính chia hết của tổng, hiệu; tìm số dư không cần thực hiện phép chia" },
     { "code": "3", "title": "Tìm chữ số chưa biết để số chia hết cho 2, 3, 5, 9" },
     { "code": "4", "title": "Lập các số từ chữ số cho trước, tìm số tự nhiên thỏa dấu hiệu chia hết" },
     { "code": "5", "title": "Bài toán thực tế vận dụng dấu hiệu chia hết" },
     { "code": "6", "title": "Bài toán nâng cao: chia hết cho 4, 8, 11, 25, …; chứng minh chia hết" }
    ]},
    { "code": "10", "title": "Bài 10: Số nguyên tố", "types": [
     { "code": "1", "title": "Nhận biết số nguyên tố, hợp số; tìm chữ số để được số nguyên tố, hợp số" },
     { "code": "2", "title": "Phân tích một số ra thừa số nguyên tố; ước nguyên tố; tìm ước, số ước dựa vào phân tích" },
     { "code": "3", "title": "Bài toán thực tế về số nguyên tố, phân tích ra thừa số nguyên tố" },
     { "code": "4", "title": "Bài toán nâng cao: chứng minh số nguyên tố, hợp số; tìm số theo số ước; số mũ trong giai thừa" }
    ]},
    { "code": "11", "title": "Bài 11: Ước chung. Ước chung lớn nhất", "types": [
     { "code": "1", "title": "Ước chung; giao của hai tập hợp; nhận biết ước chung" },
     { "code": "2", "title": "Tìm ước chung lớn nhất; tìm ước chung thông qua ƯCLN; hai số nguyên tố cùng nhau" },
     { "code": "3", "title": "Rút gọn phân số về phân số tối giản" },
     { "code": "4", "title": "Tìm số tự nhiên thỏa điều kiện là ước chung (n lớn nhất, n trong khoảng cho trước)" },
     { "code": "5", "title": "Bài toán thực tế về ước chung, ước chung lớn nhất" },
     { "code": "6", "title": "Bài toán nâng cao: tìm hai số biết tổng, hiệu, tích và ƯCLN; chia có cùng số dư" }
    ]},
    { "code": "12", "title": "Bài 12: Bội chung. Bội chung nhỏ nhất", "types": [
     { "code": "1", "title": "Bội chung; nhận biết bội chung" },
     { "code": "2", "title": "Tìm bội chung nhỏ nhất; tìm bội chung thông qua BCNN; quan hệ giữa ƯCLN và BCNN" },
     { "code": "3", "title": "Quy đồng mẫu các phân số (ứng dụng BCNN)" },
     { "code": "4", "title": "Tìm số tự nhiên thỏa điều kiện là bội chung (n nhỏ nhất, n trong khoảng cho trước)" },
     { "code": "5", "title": "Bài toán thực tế về bội chung, bội chung nhỏ nhất" },
     { "code": "6", "title": "Bài toán nâng cao: tìm hai số biết ƯCLN và BCNN; chia có dư" }
    ]}
   ]},
   { "code": "C3", "title": "Chương 3: Số nguyên", "lessons": [
    { "code": "13", "title": "Bài 13: Tập hợp các số nguyên", "types": [
     { "code": "1", "title": "Số nguyên âm trong thực tế; đọc, viết, nhận biết số nguyên" },
     { "code": "2", "title": "Biểu diễn số nguyên trên trục số; khoảng cách trên trục số" },
     { "code": "3", "title": "Số đối; giá trị tuyệt đối của số nguyên" },
     { "code": "4", "title": "So sánh, sắp xếp các số nguyên; số liền trước, liền sau" },
     { "code": "5", "title": "Tìm số nguyên x thỏa điều kiện; liệt kê phần tử tập hợp số nguyên" }
    ]},
    { "code": "14", "title": "Bài 14: Phép cộng và phép trừ số nguyên", "types": [
     { "code": "1", "title": "Thực hiện phép cộng, phép trừ số nguyên; nhận xét dấu của tổng, hiệu" },
     { "code": "2", "title": "Tính giá trị biểu thức; tính nhanh, tính hợp lí" },
     { "code": "3", "title": "Tìm số nguyên x" },
     { "code": "4", "title": "Bài toán thực tế (nhiệt độ, độ cao, tiền, bàn thắng)" },
     { "code": "5", "title": "Dãy số, tổng các số nguyên thỏa điều kiện; so sánh, điền bảng; bài toán nâng cao" }
    ]},
    { "code": "15", "title": "Bài 15: Quy tắc dấu ngoặc", "types": [
     { "code": "1", "title": "Bỏ dấu ngoặc; tính, tính nhanh, tính hợp lí" },
     { "code": "2", "title": "Tính giá trị biểu thức; đơn giản biểu thức chứa chữ" },
     { "code": "3", "title": "Tìm số nguyên x" },
     { "code": "4", "title": "Tổng dãy số theo quy luật; tổng các số nguyên thỏa điều kiện; bài toán nâng cao" }
    ]},
    { "code": "16", "title": "Bài 16: Phép nhân số nguyên", "types": [
     { "code": "1", "title": "Nhân hai, nhiều số nguyên; dấu của tích; so sánh tích không cần tính" },
     { "code": "2", "title": "Tính chất của phép nhân; tính nhanh, tính hợp lí; luỹ thừa của số nguyên" },
     { "code": "3", "title": "Tính giá trị biểu thức" },
     { "code": "4", "title": "Tìm số nguyên x" },
     { "code": "5", "title": "Bài toán thực tế" },
     { "code": "6", "title": "Bài toán nâng cao: chứng minh đẳng thức, dấu của tích nhiều thừa số, điền bảng, dãy số" }
    ]},
    { "code": "17", "title": "Bài 17: Phép chia hết. Ước và bội của một số nguyên", "types": [
     { "code": "1", "title": "Thực hiện phép chia hết; dấu của thương; tính giá trị biểu thức" },
     { "code": "2", "title": "Ước và bội của một số nguyên" },
     { "code": "3", "title": "Tìm số nguyên x" },
     { "code": "4", "title": "Tìm số nguyên n để biểu thức chia hết; tìm n theo quan hệ ước, bội" },
     { "code": "5", "title": "Bài toán thực tế" },
     { "code": "6", "title": "Bài toán nâng cao: tìm cặp số nguyên, tổng – tích, chia hết của biểu thức" }
    ]}
   ]},
   { "code": "C4", "title": "Chương 4: Một số hình phẳng trong thực tiễn", "lessons": [
    { "code": "18", "title": "Bài 18: Hình tam giác đều. Hình vuông. Hình lục giác đều", "types": [
     { "code": "1", "title": "Nhận biết tam giác đều, hình vuông, lục giác đều; tính chất về cạnh, góc, đường chéo" },
     { "code": "2", "title": "Vẽ tam giác đều, hình vuông; cắt, ghép, xếp hình" },
     { "code": "3", "title": "Đếm hình; kể tên tam giác và các yếu tố (đỉnh, cạnh, góc)" },
     { "code": "4", "title": "Tính độ dài cạnh, đoạn thẳng" }
    ]},
    { "code": "19", "title": "Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân", "types": [
     { "code": "1", "title": "Nhận biết hình chữ nhật, hình thoi, hình bình hành, hình thang cân; tính chất về cạnh, góc, đường chéo" },
     { "code": "2", "title": "Vẽ hình; cắt, gấp, ghép hình" },
     { "code": "3", "title": "Tính độ dài cạnh, số đo góc dựa vào tính chất của hình" }
    ]},
    { "code": "20", "title": "Bài 20: Chu vi và diện tích của một số tứ giác đã học", "types": [
     { "code": "1", "title": "Tính chu vi, diện tích theo công thức; tìm cạnh khi biết chu vi, diện tích" },
     { "code": "2", "title": "Diện tích hình ghép, phần tô màu (chia, bù hình)" },
     { "code": "3", "title": "Bài toán thực tế về chu vi, diện tích" },
     { "code": "4", "title": "Bài toán nâng cao: chứng minh, so sánh diện tích, diện tích tam giác, thay đổi kích thước" }
    ]}
   ]},
   { "code": "C5", "title": "Chương 5: Tính đối xứng của hình phẳng trong tự nhiên", "lessons": [
    { "code": "21", "title": "Bài 21: Hình có trục đối xứng", "types": [
     { "code": "1", "title": "Nhận biết hình có trục đối xứng; số trục đối xứng của một hình" },
     { "code": "2", "title": "Vẽ trục đối xứng; vẽ thêm để được hình có trục đối xứng cho trước" },
     { "code": "3", "title": "Trục đối xứng trong thực tế; gấp, cắt, ghép hình" }
    ]},
    { "code": "22", "title": "Bài 22: Hình có tâm đối xứng", "types": [
     { "code": "1", "title": "Nhận biết hình có tâm đối xứng; xác định tâm đối xứng" },
     { "code": "2", "title": "Vẽ thêm để được hình có tâm đối xứng (và trục đối xứng) cho trước" },
     { "code": "3", "title": "Tâm đối xứng trong thực tế; gấp, cắt, ghép hình" }
    ]}
   ]},
   { "code": "C6", "title": "Chương 6: Phân số", "lessons": [
    { "code": "23", "title": "Bài 23: Mở rộng phân số. Phân số bằng nhau", "types": [
     { "code": "1", "title": "Khái niệm phân số; đọc, viết phân số; viết phép chia, số nguyên dưới dạng phân số; điều kiện để biểu thức là phân số" },
     { "code": "2", "title": "Dùng phân số biểu thị phần tô màu, đại lượng thực tế (độ dài, khối lượng, thời gian, …)" },
     { "code": "3", "title": "Phân số bằng nhau: nhận biết, giải thích, lập cặp phân số bằng nhau; viết phân số bằng phân số cho trước" },
     { "code": "4", "title": "Tìm số nguyên x, y từ đẳng thức hai phân số bằng nhau" },
     { "code": "5", "title": "Rút gọn phân số; phân số tối giản" },
     { "code": "6", "title": "Bài toán nâng cao: tìm n để phân số có giá trị nguyên, chứng minh phân số tối giản, tìm phân số thỏa điều kiện" }
    ]},
    { "code": "24", "title": "Bài 24: So sánh phân số. Hỗn số dương", "types": [
     { "code": "1", "title": "Quy đồng mẫu nhiều phân số; tìm mẫu chung nhỏ nhất" },
     { "code": "2", "title": "So sánh hai phân số; sắp xếp các phân số, hỗn số theo thứ tự" },
     { "code": "3", "title": "Hỗn số dương: viết phân số dưới dạng hỗn số và ngược lại" },
     { "code": "4", "title": "Bài toán thực tế: so sánh đại lượng, tỉ lệ biểu thị bằng phân số" },
     { "code": "5", "title": "Tìm số nguyên x thỏa điều kiện so sánh phân số" },
     { "code": "6", "title": "Bài toán nâng cao: so sánh bằng phân số trung gian, phần bù; so sánh phân số chứa chữ, luỹ thừa" }
    ]},
    { "code": "25", "title": "Bài 25: Phép cộng và phép trừ phân số", "types": [
     { "code": "1", "title": "Cộng, trừ phân số; số đối của phân số" },
     { "code": "2", "title": "Cộng, trừ hỗn số" },
     { "code": "3", "title": "Tính nhanh, tính hợp lí; tính giá trị biểu thức" },
     { "code": "4", "title": "Tìm x" },
     { "code": "5", "title": "Bài toán thực tế" },
     { "code": "6", "title": "Bài toán nâng cao: tổng dãy phân số, chứng minh bất đẳng thức, tìm số nguyên thỏa điều kiện" }
    ]},
    { "code": "26", "title": "Bài 26: Phép nhân và phép chia phân số", "types": [
     { "code": "1", "title": "Nhân, chia phân số, hỗn số; phân số nghịch đảo" },
     { "code": "2", "title": "Thực hiện phép tính, tính giá trị biểu thức; tính hợp lí (tính chất phân phối)" },
     { "code": "3", "title": "Tìm x" },
     { "code": "4", "title": "Bài toán thực tế (chuyển động, diện tích, năng suất)" },
     { "code": "5", "title": "Bài toán nâng cao: tích dãy phân số, viết phân số thành tích/thương, chứng minh" }
    ]},
    { "code": "27", "title": "Bài 27: Hai bài toán về phân số", "types": [
     { "code": "1", "title": "Tìm giá trị phân số (phần trăm) của một số cho trước" },
     { "code": "2", "title": "Tìm một số biết giá trị một phân số (phần trăm) của nó" },
     { "code": "3", "title": "Bài toán thực tế một bước về hai bài toán phân số" },
     { "code": "4", "title": "Bài toán nhiều bước, nâng cao (phần còn lại, chuyển động, vòi nước, năng suất, tuổi)" }
    ]}
   ]},
   { "code": "C7", "title": "Chương 7: Số thập phân", "lessons": [
    { "code": "28", "title": "Bài 28: Số thập phân", "types": [
     { "code": "1", "title": "Cấu tạo số thập phân; viết phân số, hỗn số dưới dạng số thập phân và ngược lại; số đối; tỉ số phần trăm" },
     { "code": "2", "title": "So sánh, sắp xếp các số thập phân" },
     { "code": "3", "title": "Bài toán thực tế so sánh, sắp xếp số liệu thập phân" }
    ]},
    { "code": "29", "title": "Bài 29: Tính toán với số thập phân", "types": [
     { "code": "1", "title": "Cộng, trừ, nhân, chia số thập phân; tính nhẩm; dùng máy tính cầm tay" },
     { "code": "2", "title": "Tính giá trị biểu thức (số thập phân, phân số, hỗn số); tính nhanh, tính hợp lí" },
     { "code": "3", "title": "Tìm x" },
     { "code": "4", "title": "Bài toán thực tế" },
     { "code": "5", "title": "Bài toán nâng cao: tổng dãy số thập phân, điền chữ số, dịch dấu phẩy" }
    ]},
    { "code": "30", "title": "Bài 30: Làm tròn và ước lượng", "types": [
     { "code": "1", "title": "Làm tròn số nguyên, số thập phân đến hàng cho trước" },
     { "code": "2", "title": "Ước lượng kết quả phép tính; dùng ước lượng để kiểm tra kết quả" },
     { "code": "3", "title": "Bài toán thực tế về làm tròn và ước lượng" }
    ]},
    { "code": "31", "title": "Bài 31: Một số bài toán về tỉ số và tỉ số phần trăm", "types": [
     { "code": "1", "title": "Tỉ số, tỉ số phần trăm của hai số, hai đại lượng; viết số dưới dạng phần trăm; tỉ lệ xích" },
     { "code": "2", "title": "Tìm giá trị phần trăm của một số; tìm một số biết giá trị phần trăm của nó" },
     { "code": "3", "title": "Bài toán thực tế về tỉ số phần trăm (giảm giá, lãi suất, nồng độ, bản đồ, thống kê)" },
     { "code": "4", "title": "Bài toán nâng cao: tăng, giảm phần trăm liên tiếp; tìm hai số biết tỉ số và tổng (hiệu)" }
    ]}
   ]},
   { "code": "C8", "title": "Chương 8: Những hình học cơ bản", "lessons": [
    { "code": "32", "title": "Bài 32: Điểm và đường thẳng", "types": [
     { "code": "1", "title": "Điểm thuộc, không thuộc đường thẳng; đặt tên, kí hiệu; vẽ hình theo cách diễn đạt" },
     { "code": "2", "title": "Ba điểm thẳng hàng, không thẳng hàng" },
     { "code": "3", "title": "Hai đường thẳng cắt nhau, song song; giao điểm" },
     { "code": "4", "title": "Đếm số đường thẳng, giao điểm; bài toán nâng cao (trồng cây, chia miền)" }
    ]},
    { "code": "33", "title": "Bài 33: Điểm nằm giữa hai điểm. Tia", "types": [
     { "code": "1", "title": "Điểm nằm giữa hai điểm; hai điểm nằm cùng phía, khác phía" },
     { "code": "2", "title": "Tia: nhận biết, đọc tên, vẽ tia; điểm thuộc tia" },
     { "code": "3", "title": "Hai tia đối nhau, hai tia trùng nhau" },
     { "code": "4", "title": "Đếm số tia, số cặp tia đối nhau" }
    ]},
    { "code": "34", "title": "Bài 34: Đoạn thẳng. Độ dài đoạn thẳng", "types": [
     { "code": "1", "title": "Đoạn thẳng: nhận biết, đọc tên, vẽ; điểm thuộc đoạn thẳng" },
     { "code": "2", "title": "Đo, so sánh, sắp xếp độ dài đoạn thẳng" },
     { "code": "3", "title": "Tính độ dài đoạn thẳng; xác định điểm nằm giữa dựa vào độ dài" },
     { "code": "4", "title": "Đếm số đoạn thẳng; xét ba điểm thẳng hàng qua độ dài; bài toán nâng cao" }
    ]},
    { "code": "35", "title": "Bài 35: Trung điểm của đoạn thẳng", "types": [
     { "code": "1", "title": "Nhận biết, vẽ trung điểm; tính độ dài đoạn thẳng khi biết trung điểm" },
     { "code": "2", "title": "Chứng tỏ (xét) một điểm là trung điểm của đoạn thẳng" },
     { "code": "3", "title": "Bài toán nâng cao, thực tế về trung điểm" }
    ]},
    { "code": "36", "title": "Bài 36: Góc", "types": [
     { "code": "1", "title": "Nhận biết góc; đọc, viết tên góc, đỉnh, cạnh; góc bẹt" },
     { "code": "2", "title": "Điểm nằm trong góc" },
     { "code": "3", "title": "Vẽ góc theo cách diễn đạt" },
     { "code": "4", "title": "Nửa mặt phẳng; đường thẳng cắt đoạn thẳng" },
     { "code": "5", "title": "Đếm số góc; bài toán nâng cao" }
    ]},
    { "code": "37", "title": "Bài 37: Số đo góc", "types": [
     { "code": "1", "title": "Đo góc; đọc số đo góc; so sánh hai góc" },
     { "code": "2", "title": "Phân loại góc: góc nhọn, góc vuông, góc tù, góc bẹt" },
     { "code": "3", "title": "Vẽ góc có số đo cho trước" },
     { "code": "4", "title": "Tính số đo góc (tia nằm giữa, góc kề bù, góc phụ nhau); góc giữa hai kim đồng hồ" },
     { "code": "5", "title": "Bài toán nâng cao, thực tế về số đo góc" }
    ]}
   ]},
   { "code": "C9", "title": "Chương 9: Dữ liệu và xác suất thực nghiệm", "lessons": [
    { "code": "38", "title": "Bài 38: Dữ liệu và thu thập dữ liệu", "types": [
     { "code": "1", "title": "Nhận biết, phân loại dữ liệu (số liệu, không phải số liệu)" },
     { "code": "2", "title": "Đánh giá tính hợp lí của dữ liệu" },
     { "code": "3", "title": "Thu thập dữ liệu; lập và đọc bảng dữ liệu ban đầu" }
    ]},
    { "code": "39", "title": "Bài 39: Bảng thống kê và biểu đồ tranh", "types": [
     { "code": "1", "title": "Đọc, phân tích bảng thống kê" },
     { "code": "2", "title": "Lập bảng thống kê từ dữ liệu" },
     { "code": "3", "title": "Đọc, phân tích biểu đồ tranh" },
     { "code": "4", "title": "Vẽ biểu đồ tranh" }
    ]},
    { "code": "40", "title": "Bài 40: Biểu đồ cột", "types": [
     { "code": "1", "title": "Đọc, phân tích biểu đồ cột" },
     { "code": "2", "title": "Vẽ biểu đồ cột" }
    ]},
    { "code": "41", "title": "Bài 41: Biểu đồ cột kép", "types": [
     { "code": "1", "title": "Đọc, phân tích biểu đồ cột kép" },
     { "code": "2", "title": "Vẽ biểu đồ cột kép" }
    ]},
    { "code": "42", "title": "Bài 42: Kết quả có thể và sự kiện trong trò chơi, thí nghiệm", "types": [
     { "code": "1", "title": "Liệt kê các kết quả có thể xảy ra" },
     { "code": "2", "title": "Sự kiện có thể xảy ra, không thể xảy ra, chắc chắn xảy ra" },
     { "code": "3", "title": "Trò chơi, tình huống thực tế" }
    ]},
    { "code": "43", "title": "Bài 43: Xác suất thực nghiệm", "types": [
     { "code": "1", "title": "Tính xác suất thực nghiệm của một sự kiện" },
     { "code": "2", "title": "Vận dụng xác suất thực nghiệm (dự đoán, ước lượng, tình huống thực tế)" }
    ]}
   ]}
  ]
 },
 "7": { "code": "7", "title": "Lớp 7",
  "chapters": [
   { "code": "C1", "title": "Chương 1: Số hữu tỉ", "lessons": [
    { "code": "1", "title": "Bài 1: Tập hợp các số hữu tỉ", "types": [
     { "code": "1", "title": "Nhận biết số hữu tỉ; quan hệ giữa các tập hợp số N, Z, Q" },
     { "code": "2", "title": "Biểu diễn số hữu tỉ trên trục số" },
     { "code": "3", "title": "Số đối của một số hữu tỉ" },
     { "code": "4", "title": "So sánh, sắp xếp các số hữu tỉ" },
     { "code": "5", "title": "Bài toán nâng cao: tìm điều kiện để số hữu tỉ là số nguyên; chứng minh" }
    ]},
    { "code": "2", "title": "Bài 2: Cộng, trừ, nhân, chia số hữu tỉ", "types": [
     { "code": "1", "title": "Cộng, trừ số hữu tỉ; viết số hữu tỉ dưới dạng tổng, hiệu" },
     { "code": "2", "title": "Nhân, chia số hữu tỉ" },
     { "code": "3", "title": "Thực hiện phép tính kết hợp; tính nhanh, tính hợp lí" },
     { "code": "4", "title": "Tìm x" },
     { "code": "5", "title": "Bài toán thực tế" },
     { "code": "6", "title": "Bài toán nâng cao: tính tổng dãy, giá trị nhỏ nhất, tìm x ở dạng đặc biệt" }
    ]},
    { "code": "3", "title": "Bài 3: Luỹ thừa với số mũ tự nhiên của một số hữu tỉ", "types": [
     { "code": "1", "title": "Tính luỹ thừa; viết số dưới dạng luỹ thừa; cơ số, số mũ" },
     { "code": "2", "title": "Nhân, chia hai luỹ thừa cùng cơ số; luỹ thừa của luỹ thừa, của tích, thương; rút gọn biểu thức" },
     { "code": "3", "title": "Tìm x, tìm số mũ n trong đẳng thức, bất đẳng thức chứa luỹ thừa" },
     { "code": "4", "title": "So sánh các luỹ thừa, các biểu thức chứa luỹ thừa" },
     { "code": "5", "title": "Bài toán nâng cao: chữ số tận cùng, chia hết, giá trị lớn nhất, nhỏ nhất" }
    ]},
    { "code": "4", "title": "Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế", "types": [
     { "code": "1", "title": "Thứ tự thực hiện các phép tính; tính giá trị biểu thức" },
     { "code": "2", "title": "Quy tắc dấu ngoặc; tính hợp lí" },
     { "code": "3", "title": "Quy tắc chuyển vế; tìm x" },
     { "code": "4", "title": "Bài toán thực tế" }
    ]}
   ]},
   { "code": "C2", "title": "Chương 2: Số thực", "lessons": [
    { "code": "5", "title": "Bài 5: Làm quen với số thập phân vô hạn tuần hoàn", "types": [
     { "code": "1", "title": "Nhận biết số thập phân hữu hạn, vô hạn tuần hoàn; chu kì; viết phân số dưới dạng số thập phân" },
     { "code": "2", "title": "Viết số thập phân hữu hạn, vô hạn tuần hoàn dưới dạng phân số; tính toán với số thập phân vô hạn tuần hoàn" },
     { "code": "3", "title": "Làm tròn số theo hàng, theo độ chính xác cho trước" },
     { "code": "4", "title": "Ước lượng kết quả phép tính" },
     { "code": "5", "title": "Bài toán thực tế: làm tròn, ước lượng số liệu" }
    ]},
    { "code": "6", "title": "Bài 6: Số vô tỉ. Căn bậc hai số học", "types": [
     { "code": "1", "title": "Nhận biết số vô tỉ, số hữu tỉ; chứng minh một số là số vô tỉ" },
     { "code": "2", "title": "Tính căn bậc hai số học; tính giá trị biểu thức chứa căn bậc hai" },
     { "code": "3", "title": "Tìm x" },
     { "code": "4", "title": "Dùng máy tính cầm tay tính căn bậc hai; làm tròn số vô tỉ" },
     { "code": "5", "title": "Bài toán thực tế" },
     { "code": "6", "title": "Bài toán nâng cao: giá trị nguyên, giá trị nhỏ nhất của biểu thức chứa căn" }
    ]},
    { "code": "7", "title": "Bài 7: Tập hợp các số thực", "types": [
     { "code": "1", "title": "Nhận biết số thực; quan hệ giữa các tập hợp số N, Z, Q, I, R" },
     { "code": "2", "title": "Số đối; biểu diễn số thực trên trục số; khoảng cách giữa hai điểm trên trục số" },
     { "code": "3", "title": "So sánh, sắp xếp các số thực" },
     { "code": "4", "title": "Giá trị tuyệt đối của một số thực; tính giá trị biểu thức chứa dấu giá trị tuyệt đối" },
     { "code": "5", "title": "Tìm x trong đẳng thức chứa dấu giá trị tuyệt đối, căn bậc hai" },
     { "code": "6", "title": "Bài toán nâng cao: giá trị lớn nhất, nhỏ nhất; tìm x, y thỏa điều kiện" }
    ]}
   ]},
   { "code": "C3", "title": "Chương 3: Góc và đường thẳng song song", "lessons": [
    { "code": "8", "title": "Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc", "types": [
     { "code": "1", "title": "Nhận biết hai góc kề nhau, kề bù, đối đỉnh, phụ nhau, bù nhau" },
     { "code": "2", "title": "Tính số đo góc dựa vào hai góc kề bù, đối đỉnh, phụ nhau, bù nhau" },
     { "code": "3", "title": "Tia phân giác của một góc: nhận biết, tính số đo góc" },
     { "code": "4", "title": "Chứng minh tia là tia phân giác; chứng minh hai góc đối đỉnh, hai tia vuông góc, hai tia đối nhau" },
     { "code": "5", "title": "Vẽ hình theo yêu cầu: vẽ góc, góc kề bù, góc đối đỉnh, tia phân giác" }
    ]},
    { "code": "9", "title": "Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết", "types": [
     { "code": "1", "title": "Nhận biết các cặp góc so le trong, đồng vị, trong cùng phía" },
     { "code": "2", "title": "Tính số đo các góc tạo bởi một đường thẳng cắt hai đường thẳng" },
     { "code": "3", "title": "Chứng minh hai đường thẳng song song (dấu hiệu nhận biết); tìm các cặp đường thẳng song song" }
    ]},
    { "code": "10", "title": "Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song", "types": [
     { "code": "1", "title": "Tiên đề Euclid: chứng minh đường thẳng cắt nhau, ba điểm thẳng hàng" },
     { "code": "2", "title": "Tính số đo góc dựa vào tính chất hai đường thẳng song song" },
     { "code": "3", "title": "Chứng minh hai đường thẳng song song rồi tính số đo góc; tìm điều kiện để hai đường thẳng song song" },
     { "code": "4", "title": "Chứng minh hai đường thẳng song song, vuông góc (quan hệ giữa vuông góc và song song)" },
     { "code": "5", "title": "Chứng minh hai góc bằng nhau, đẳng thức về góc, tia phân giác" }
    ]},
    { "code": "11", "title": "Bài 11: Định lí và chứng minh định lí", "types": [
     { "code": "1", "title": "Nhận biết giả thiết, kết luận; viết giả thiết, kết luận bằng kí hiệu; phát biểu định lí" },
     { "code": "2", "title": "Chứng minh định lí" }
    ]}
   ]},
   { "code": "C4", "title": "Chương 4: Tam giác bằng nhau", "lessons": [
    { "code": "12", "title": "Bài 12: Tổng các góc trong một tam giác", "types": [
     { "code": "1", "title": "Nhận biết tam giác; các đỉnh, cạnh, góc của tam giác" },
     { "code": "2", "title": "Tính số đo góc của tam giác (định lí tổng ba góc, góc ngoài)" },
     { "code": "3", "title": "Tính số đo góc có tia phân giác, đường cao, đường thẳng song song trong tam giác" },
     { "code": "4", "title": "Chứng minh hai góc bằng nhau, so sánh góc; chứng minh song song, vuông góc, đẳng thức về góc" }
    ]},
    { "code": "13", "title": "Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác", "types": [
     { "code": "1", "title": "Hai tam giác bằng nhau: viết kí hiệu, tìm cạnh, góc tương ứng; tính độ dài cạnh, số đo góc, chu vi" },
     { "code": "2", "title": "Nhận biết các cặp tam giác bằng nhau trên hình vẽ" },
     { "code": "3", "title": "Chứng minh hai tam giác bằng nhau (c.c.c); suy ra góc bằng nhau, tia phân giác, song song, vuông góc" },
     { "code": "4", "title": "Vẽ tam giác biết độ dài ba cạnh" }
    ]},
    { "code": "14", "title": "Bài 14: Trường hợp bằng nhau thứ hai và thứ ba của tam giác", "types": [
     { "code": "1", "title": "Nhận biết hai tam giác bằng nhau (c.g.c, g.c.g); bổ sung điều kiện để hai tam giác bằng nhau" },
     { "code": "2", "title": "Chứng minh hai tam giác bằng nhau (c.g.c, g.c.g); suy ra hai đoạn thẳng, hai góc bằng nhau" },
     { "code": "3", "title": "Chứng minh song song, vuông góc, tia phân giác, trung điểm nhờ tam giác bằng nhau" },
     { "code": "4", "title": "Chứng minh ba điểm thẳng hàng, ba đường thẳng đồng quy, đẳng thức về đoạn thẳng" },
     { "code": "5", "title": "Tính độ dài đoạn thẳng, số đo góc nhờ tam giác bằng nhau" }
    ]},
    { "code": "15", "title": "Bài 15: Các trường hợp bằng nhau của tam giác vuông", "types": [
     { "code": "1", "title": "Các trường hợp bằng nhau của tam giác vuông; chứng minh hai tam giác vuông bằng nhau, suy ra cạnh, góc bằng nhau" },
     { "code": "2", "title": "Chứng minh tia phân giác, trung điểm, song song, vuông góc nhờ tam giác vuông bằng nhau" },
     { "code": "3", "title": "Chứng minh đẳng thức về đoạn thẳng, ba điểm thẳng hàng" }
    ]},
    { "code": "16", "title": "Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng", "types": [
     { "code": "1", "title": "Nhận biết tam giác cân, tam giác đều; tính số đo góc" },
     { "code": "2", "title": "Chứng minh tam giác cân, tam giác đều" },
     { "code": "3", "title": "Vận dụng tính chất tam giác cân, tam giác đều: chứng minh đoạn thẳng, góc bằng nhau; song song, vuông góc; ba điểm thẳng hàng" },
     { "code": "4", "title": "Đường trung trực của đoạn thẳng: nhận biết, tính chất; bài toán thực tế" }
    ]}
   ]},
   { "code": "C5", "title": "Chương 5: Thu thập và biểu diễn dữ liệu", "lessons": [
    { "code": "17", "title": "Bài 17: Thu thập và phân loại dữ liệu", "types": [
     { "code": "1", "title": "Phân loại dữ liệu: dữ liệu số, không là số; định tính, định lượng; sắp thứ tự được" },
     { "code": "2", "title": "Thu thập, tổ chức dữ liệu; tính đại diện của dữ liệu" },
     { "code": "3", "title": "Xét tính hợp lí của dữ liệu trong bảng thống kê" }
    ]},
    { "code": "18", "title": "Bài 18: Biểu đồ hình quạt tròn", "types": [
     { "code": "1", "title": "Đọc, mô tả và phân tích dữ liệu từ biểu đồ hình quạt tròn; lập bảng thống kê từ biểu đồ" },
     { "code": "2", "title": "Tính số liệu (số lượng, tỉ số phần trăm) từ biểu đồ hình quạt tròn; bài toán thực tế" },
     { "code": "3", "title": "Biểu diễn dữ liệu bằng biểu đồ hình quạt tròn (vẽ, hoàn thiện biểu đồ)" }
    ]},
    { "code": "19", "title": "Bài 19: Biểu đồ đoạn thẳng", "types": [
     { "code": "1", "title": "Đọc và mô tả dữ liệu từ biểu đồ đoạn thẳng; lập bảng thống kê từ biểu đồ" },
     { "code": "2", "title": "Phân tích dữ liệu, nhận xét xu hướng; tính toán, giải quyết vấn đề thực tế từ biểu đồ đoạn thẳng" },
     { "code": "3", "title": "Vẽ biểu đồ đoạn thẳng biểu diễn dữ liệu" }
    ]}
   ]},
   { "code": "C6", "title": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ", "lessons": [
    { "code": "20", "title": "Bài 20: Tỉ lệ thức", "types": [
     { "code": "1", "title": "Tỉ số; thay tỉ số giữa các số hữu tỉ bằng tỉ số giữa các số nguyên" },
     { "code": "2", "title": "Nhận biết tỉ lệ thức, tính chất của tỉ lệ thức; lập tỉ lệ thức từ các số, từ đẳng thức tích" },
     { "code": "3", "title": "Tìm số hạng chưa biết của tỉ lệ thức; tìm x" },
     { "code": "4", "title": "Chứng minh tỉ lệ thức; tính tỉ số, giá trị biểu thức từ tỉ lệ thức" },
     { "code": "5", "title": "Bài toán thực tế vận dụng tỉ lệ thức" }
    ]},
    { "code": "21", "title": "Bài 21: Tính chất của dãy tỉ số bằng nhau", "types": [
     { "code": "1", "title": "Tính chất dãy tỉ số bằng nhau; tìm các số biết tổng (hiệu) và tỉ số của chúng" },
     { "code": "2", "title": "Tìm các số biết tích, tổng bình phương, luỹ thừa (đặt k); dãy tỉ số ghép, dạng ax = by = cz" },
     { "code": "3", "title": "Chứng minh tỉ lệ thức, đẳng thức từ dãy tỉ số bằng nhau" },
     { "code": "4", "title": "Tính giá trị biểu thức, tính tỉ số từ dãy tỉ số bằng nhau" },
     { "code": "5", "title": "Bài toán thực tế: chia một số thành các phần tỉ lệ" },
     { "code": "6", "title": "Bài toán nâng cao: dãy tỉ số với số có nhiều chữ số, ước và bội, tìm số" }
    ]},
    { "code": "22", "title": "Bài 22: Đại lượng tỉ lệ thuận", "types": [
     { "code": "1", "title": "Nhận biết hai đại lượng tỉ lệ thuận; hệ số tỉ lệ, công thức liên hệ; điền bảng giá trị" },
     { "code": "2", "title": "Bài toán về hai đại lượng tỉ lệ thuận: tìm giá trị tương ứng" },
     { "code": "3", "title": "Chia một số thành các phần tỉ lệ thuận; tìm các đại lượng biết tổng, hiệu và tỉ lệ" },
     { "code": "4", "title": "Bài toán thực tế nâng cao: chuyển động, phần trăm, tuổi, kết hợp nhiều tỉ lệ" }
    ]},
    { "code": "23", "title": "Bài 23: Đại lượng tỉ lệ nghịch", "types": [
     { "code": "1", "title": "Nhận biết hai đại lượng tỉ lệ nghịch; hệ số tỉ lệ, công thức liên hệ; điền bảng giá trị" },
     { "code": "2", "title": "Bài toán về hai đại lượng tỉ lệ nghịch: tìm giá trị tương ứng (số người – thời gian, giá – số lượng, bánh răng)" },
     { "code": "3", "title": "Chia một số thành các phần tỉ lệ nghịch; bài toán chia tỉ lệ nghịch (đội máy, đội công nhân)" },
     { "code": "4", "title": "Bài toán chuyển động (vận tốc và thời gian tỉ lệ nghịch)" }
    ]}
   ]},
   { "code": "C7", "title": "Chương 7: Biểu thức đại số và đa thức một biến", "lessons": [
    { "code": "24", "title": "Bài 24: Biểu thức đại số", "types": [
     { "code": "1", "title": "Viết biểu thức đại số; diễn đạt biểu thức đại số bằng lời" },
     { "code": "2", "title": "Tính giá trị của biểu thức đại số tại giá trị cho trước của biến" },
     { "code": "3", "title": "Tính giá trị biểu thức khi biến thỏa điều kiện (|x| = a, x - y = 0, tỉ số x/y, tổng bằng 0)" },
     { "code": "4", "title": "Giá trị lớn nhất, nhỏ nhất; giá trị nguyên của biểu thức" },
     { "code": "5", "title": "Bài toán thực tế: lập biểu thức biểu thị đại lượng, tính giá trị" }
    ]},
    { "code": "25", "title": "Bài 25: Đa thức một biến", "types": [
     { "code": "1", "title": "Đơn thức một biến: nhận biết, hệ số, bậc; cộng, trừ các đơn thức cùng bậc" },
     { "code": "2", "title": "Đa thức một biến: thu gọn, sắp xếp; bậc, hệ số cao nhất, hệ số tự do" },
     { "code": "3", "title": "Tính giá trị của đa thức" },
     { "code": "4", "title": "Nghiệm của đa thức: kiểm tra một số có là nghiệm không; tìm nghiệm" },
     { "code": "5", "title": "Chứng minh đa thức không có nghiệm; tìm tham số, hệ số để đa thức thỏa điều kiện về nghiệm" },
     { "code": "6", "title": "Bài toán thực tế dẫn đến đa thức một biến" }
    ]},
    { "code": "26", "title": "Bài 26: Phép cộng và phép trừ đa thức một biến", "types": [
     { "code": "1", "title": "Cộng, trừ hai hay nhiều đa thức một biến" },
     { "code": "2", "title": "Tìm đa thức chưa biết thỏa mãn đẳng thức về tổng, hiệu" },
     { "code": "3", "title": "Vận dụng: cộng, trừ rồi tính giá trị, tìm nghiệm; chứng minh biểu thức không phụ thuộc biến; tìm hệ số" },
     { "code": "4", "title": "Bài toán thực tế dẫn đến cộng, trừ đa thức" }
    ]},
    { "code": "27", "title": "Bài 27: Phép nhân đa thức một biến", "types": [
     { "code": "1", "title": "Nhân đơn thức với đơn thức; nhân đơn thức với đa thức" },
     { "code": "2", "title": "Nhân đa thức với đa thức; rút gọn biểu thức" },
     { "code": "3", "title": "Tính giá trị biểu thức; chứng minh giá trị biểu thức không phụ thuộc vào biến" },
     { "code": "4", "title": "Tìm x" },
     { "code": "5", "title": "Bài toán thực tế, hình học, bài toán về số dẫn đến phép nhân đa thức" }
    ]},
    { "code": "28", "title": "Bài 28: Phép chia đa thức một biến", "types": [
     { "code": "1", "title": "Chia đơn thức cho đơn thức; chia đa thức cho đơn thức" },
     { "code": "2", "title": "Chia đa thức cho đa thức (chia hết, chia có dư); tìm thương, số dư, đa thức chưa biết" },
     { "code": "3", "title": "Tìm điều kiện để phép chia là phép chia hết (tìm a, b; tìm n; tìm x nguyên)" },
     { "code": "4", "title": "Tìm x; rút gọn, tính giá trị biểu thức có phép chia" }
    ]}
   ]},
   { "code": "C8", "title": "Chương 8: Làm quen với biến cố và xác suất của biến cố", "lessons": [
    { "code": "29", "title": "Bài 29: Làm quen với biến cố", "types": [
     { "code": "1", "title": "Nhận biết biến cố chắc chắn, biến cố không thể, biến cố ngẫu nhiên" },
     { "code": "2", "title": "Lấy ví dụ về biến cố; kết quả thuận lợi; tìm điều kiện để biến cố là chắc chắn, không thể, ngẫu nhiên" }
    ]},
    { "code": "30", "title": "Bài 30: Làm quen với xác suất của biến cố", "types": [
     { "code": "1", "title": "Nhận biết các biến cố đồng khả năng; so sánh khả năng xảy ra của các biến cố" },
     { "code": "2", "title": "Tính xác suất của biến cố trong một lần thử (gieo xúc xắc, tung đồng xu, rút thẻ, lấy bóng, vòng quay)" },
     { "code": "3", "title": "Tính xác suất khi thử nhiều lần, nhiều người cùng thử; bài toán nâng cao" }
    ]}
   ]},
   { "code": "C9", "title": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác", "lessons": [
    { "code": "31", "title": "Bài 31: Quan hệ giữa góc và cạnh đối diện trong một tam giác", "types": [
     { "code": "1", "title": "So sánh các góc của tam giác khi biết độ dài các cạnh" },
     { "code": "2", "title": "So sánh các cạnh của tam giác khi biết số đo các góc" },
     { "code": "3", "title": "Chứng minh, so sánh các đoạn thẳng, các góc (bài toán tổng hợp)" }
    ]},
    { "code": "32", "title": "Bài 32: Quan hệ giữa đường vuông góc và đường xiên", "types": [
     { "code": "1", "title": "Nhận biết đường vuông góc, đường xiên, khoảng cách từ một điểm đến một đường thẳng; vẽ hình" },
     { "code": "2", "title": "So sánh đường vuông góc và đường xiên, các đường xiên và hình chiếu; bài toán thực tế" },
     { "code": "3", "title": "Chứng minh bất đẳng thức về đoạn thẳng (tổng, chu vi); bài toán cực trị" }
    ]},
    { "code": "33", "title": "Bài 33: Quan hệ giữa ba cạnh của một tam giác", "types": [
     { "code": "1", "title": "Kiểm tra bộ ba độ dài có là ba cạnh của một tam giác" },
     { "code": "2", "title": "Tìm độ dài cạnh chưa biết; tính chu vi tam giác cân" },
     { "code": "3", "title": "Chứng minh bất đẳng thức về đoạn thẳng trong tam giác" },
     { "code": "4", "title": "Bài toán thực tế; tìm điểm để tổng khoảng cách nhỏ nhất" }
    ]},
    { "code": "34", "title": "Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác", "types": [
     { "code": "1", "title": "Đường trung tuyến, trọng tâm: nhận biết, tỉ số; tính độ dài đoạn thẳng" },
     { "code": "2", "title": "Vận dụng tính chất trọng tâm, đường trung tuyến: chứng minh ba điểm thẳng hàng, xác định trọng tâm, đẳng thức, bất đẳng thức" },
     { "code": "3", "title": "Đường phân giác của tam giác: nhận biết; tính số đo góc" },
     { "code": "4", "title": "Chứng minh về đường phân giác, giao điểm ba đường phân giác (cách đều ba cạnh, đồng quy, thẳng hàng)" }
    ]},
    { "code": "35", "title": "Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác", "types": [
     { "code": "1", "title": "Đường trung trực của tam giác, điểm cách đều ba đỉnh: nhận biết, tính chất; tính góc, độ dài" },
     { "code": "2", "title": "Đường cao, trực tâm của tam giác: nhận biết; tính số đo góc" },
     { "code": "3", "title": "Chứng minh vuông góc, đồng quy, thẳng hàng; bài toán tổng hợp về các đường đồng quy trong tam giác" },
     { "code": "4", "title": "Bài toán thực tế (xác định điểm cách đều, tìm tâm đường tròn); bài toán cực trị" }
    ]}
   ]},
   { "code": "C10", "title": "Chương 10: Một số hình khối trong thực tiễn", "lessons": [
    { "code": "36", "title": "Bài 36: Hình hộp chữ nhật và hình lập phương", "types": [
     { "code": "1", "title": "Nhận biết hình hộp chữ nhật, hình lập phương: đỉnh, cạnh, mặt, đường chéo; hình khai triển; đếm hình" },
     { "code": "2", "title": "Tính diện tích xung quanh, diện tích toàn phần, thể tích; tìm kích thước khi biết diện tích, thể tích" },
     { "code": "3", "title": "Bài toán thực tế về hình hộp chữ nhật, hình lập phương" },
     { "code": "4", "title": "Quan hệ song song, vuông góc trong hình hộp chữ nhật; tính độ dài đường chéo (nâng cao)" }
    ]},
    { "code": "37", "title": "Bài 37: Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác", "types": [
     { "code": "1", "title": "Nhận biết hình lăng trụ đứng tam giác, tứ giác: đỉnh, cạnh, mặt; tạo lập hình; quan hệ song song, vuông góc" },
     { "code": "2", "title": "Tính diện tích xung quanh, diện tích toàn phần, thể tích; tìm kích thước" },
     { "code": "3", "title": "Bài toán thực tế về hình lăng trụ đứng" }
    ]}
   ]}
  ]
 },
 "8": { "code": "8", "title": "Lớp 8",
  "chapters": [
   { "code": "C1", "title": "Chương 1: Đa thức", "lessons": [
    { "code": "1", "title": "Bài 1: Đơn thức", "types": [
     { "code": "1", "title": "Nhận biết đơn thức; hệ số, phần biến, bậc của đơn thức" },
     { "code": "2", "title": "Thu gọn đơn thức; nhân các đơn thức" },
     { "code": "3", "title": "Đơn thức đồng dạng; cộng, trừ các đơn thức đồng dạng" },
     { "code": "4", "title": "Tính giá trị của đơn thức, biểu thức" },
     { "code": "5", "title": "Bài toán thực tế: viết đơn thức biểu thị diện tích, thể tích" },
     { "code": "6", "title": "Bài toán nâng cao: xét dấu, tìm biến, đếm đơn thức" }
    ]},
    { "code": "2", "title": "Bài 2: Đa thức", "types": [
     { "code": "1", "title": "Nhận biết đa thức; hạng tử của đa thức" },
     { "code": "2", "title": "Thu gọn đa thức; tìm bậc của đa thức" },
     { "code": "3", "title": "Tính giá trị của đa thức" },
     { "code": "4", "title": "Bài toán nâng cao: đa thức chứa tham số, tính giá trị có điều kiện" },
     { "code": "5", "title": "Bài toán thực tế" }
    ]},
    { "code": "3", "title": "Bài 3: Phép cộng và phép trừ đa thức", "types": [
     { "code": "1", "title": "Cộng, trừ đa thức" },
     { "code": "2", "title": "Tìm đa thức chưa biết trong một tổng, một hiệu" },
     { "code": "3", "title": "Tính giá trị biểu thức; tìm x" },
     { "code": "4", "title": "Bài toán thực tế" },
     { "code": "5", "title": "Bài toán nâng cao" }
    ]},
    { "code": "4", "title": "Bài 4: Phép nhân đa thức", "types": [
     { "code": "1", "title": "Nhân đơn thức với đa thức" },
     { "code": "2", "title": "Nhân đa thức với đa thức" },
     { "code": "3", "title": "Rút gọn biểu thức; tính giá trị biểu thức" },
     { "code": "4", "title": "Tìm x" },
     { "code": "5", "title": "Chứng minh đẳng thức; giá trị biểu thức không phụ thuộc vào biến" },
     { "code": "6", "title": "Bài toán thực tế" },
     { "code": "7", "title": "Bài toán nâng cao: tính nhanh giá trị, chia hết, biểu thức chứa tham số" }
    ]},
    { "code": "5", "title": "Bài 5: Phép chia đa thức cho đơn thức", "types": [
     { "code": "1", "title": "Chia đơn thức cho đơn thức" },
     { "code": "2", "title": "Chia đa thức cho đơn thức" },
     { "code": "3", "title": "Xét tính chia hết; tìm n để phép chia là phép chia hết" },
     { "code": "4", "title": "Tìm đơn thức, đa thức chưa biết; tìm x" },
     { "code": "5", "title": "Rút gọn, tính giá trị biểu thức có phép chia" },
     { "code": "6", "title": "Bài toán thực tế" }
    ]}
   ]},
   { "code": "C2", "title": "Chương 2: Hằng đẳng thức đáng nhớ và ứng dụng", "lessons": [
    { "code": "6", "title": "Bài 6: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu", "types": [
     { "code": "1", "title": "Khai triển bình phương của một tổng, một hiệu; hiệu hai bình phương" },
     { "code": "2", "title": "Viết biểu thức dưới dạng bình phương của một tổng, một hiệu hoặc dạng tích" },
     { "code": "3", "title": "Tính nhanh" },
     { "code": "4", "title": "Rút gọn biểu thức; tính giá trị biểu thức" },
     { "code": "5", "title": "Tìm x" },
     { "code": "6", "title": "Chứng minh đẳng thức; tính giá trị biểu thức khi biết tổng, tích" },
     { "code": "7", "title": "Chứng minh biểu thức luôn dương, luôn âm; tìm giá trị lớn nhất, nhỏ nhất" },
     { "code": "8", "title": "Bài toán nâng cao: tìm x, y từ tổng các bình phương; chia hết; tính tích" },
     { "code": "9", "title": "Bài toán thực tế" }
    ]},
    { "code": "7", "title": "Bài 7: Lập phương của một tổng. Lập phương của một hiệu", "types": [
     { "code": "1", "title": "Khai triển lập phương của một tổng, một hiệu" },
     { "code": "2", "title": "Viết biểu thức dưới dạng lập phương của một tổng, một hiệu" },
     { "code": "3", "title": "Rút gọn biểu thức; tính giá trị biểu thức; tính nhanh" },
     { "code": "4", "title": "Tìm x" },
     { "code": "5", "title": "Chứng minh đẳng thức; biểu thức không phụ thuộc vào biến" },
     { "code": "6", "title": "Bài toán thực tế" },
     { "code": "7", "title": "Bài toán nâng cao" }
    ]},
    { "code": "8", "title": "Bài 8: Tổng và hiệu hai lập phương", "types": [
     { "code": "1", "title": "Viết tổng, hiệu hai lập phương dưới dạng tích và ngược lại" },
     { "code": "2", "title": "Rút gọn biểu thức; tính giá trị biểu thức; tính nhanh" },
     { "code": "3", "title": "Tìm x" },
     { "code": "4", "title": "Chứng minh đẳng thức; biểu thức không phụ thuộc vào biến" },
     { "code": "5", "title": "Tính giá trị biểu thức khi biết tổng, tích của hai số" },
     { "code": "6", "title": "Bài toán thực tế; bài toán nâng cao" }
    ]},
    { "code": "9", "title": "Bài 9: Phân tích đa thức thành nhân tử", "types": [
     { "code": "1", "title": "Phân tích bằng phương pháp đặt nhân tử chung" },
     { "code": "2", "title": "Phân tích bằng phương pháp dùng hằng đẳng thức" },
     { "code": "3", "title": "Phân tích bằng phương pháp nhóm hạng tử" },
     { "code": "4", "title": "Phối hợp nhiều phương pháp; tách hạng tử, thêm bớt hạng tử" },
     { "code": "5", "title": "Tính nhanh; tính giá trị biểu thức" },
     { "code": "6", "title": "Tìm x; tìm nghiệm của đa thức" },
     { "code": "7", "title": "Chứng minh chia hết; bài toán số học và nâng cao" },
     { "code": "8", "title": "Bài toán thực tế, hình học" }
    ]}
   ]},
   { "code": "C3", "title": "Chương 3: Tứ giác", "lessons": [
    { "code": "10", "title": "Bài 10: Tứ giác", "types": [
     { "code": "1", "title": "Nhận biết tứ giác, tứ giác lồi, đa giác; các yếu tố của tứ giác" },
     { "code": "2", "title": "Tính số đo góc của tứ giác; góc ngoài của tứ giác" },
     { "code": "3", "title": "Bài toán về cạnh, đường chéo; chứng minh hình học" },
     { "code": "4", "title": "Bài toán thực tế" }
    ]},
    { "code": "11", "title": "Bài 11: Hình thang cân", "types": [
     { "code": "1", "title": "Nhận biết hình thang, hình thang cân; tính chất" },
     { "code": "2", "title": "Tính góc, độ dài, diện tích trong hình thang, hình thang cân" },
     { "code": "3", "title": "Chứng minh tứ giác là hình thang, hình thang cân" },
     { "code": "4", "title": "Vận dụng tính chất hình thang cân để chứng minh" },
     { "code": "5", "title": "Bài toán thực tế" }
    ]},
    { "code": "12", "title": "Bài 12: Hình bình hành", "types": [
     { "code": "1", "title": "Nhận biết hình bình hành; tính chất, dấu hiệu nhận biết" },
     { "code": "2", "title": "Tính góc, độ dài, chu vi, diện tích trong hình bình hành" },
     { "code": "3", "title": "Chứng minh tứ giác là hình bình hành" },
     { "code": "4", "title": "Vận dụng tính chất hình bình hành: chứng minh bằng nhau, thẳng hàng, đồng quy, song song" },
     { "code": "5", "title": "Bài toán thực tế" }
    ]},
    { "code": "13", "title": "Bài 13: Hình chữ nhật", "types": [
     { "code": "1", "title": "Nhận biết hình chữ nhật; tính chất, dấu hiệu nhận biết" },
     { "code": "2", "title": "Tính độ dài, góc trong hình chữ nhật; đường trung tuyến của tam giác vuông" },
     { "code": "3", "title": "Chứng minh tứ giác là hình chữ nhật; điều kiện để là hình chữ nhật" },
     { "code": "4", "title": "Vận dụng tính chất hình chữ nhật để chứng minh" },
     { "code": "5", "title": "Bài toán thực tế" }
    ]},
    { "code": "14", "title": "Bài 14: Hình thoi và hình vuông", "types": [
     { "code": "1", "title": "Nhận biết hình thoi, hình vuông; tính chất, dấu hiệu nhận biết" },
     { "code": "2", "title": "Tính độ dài, góc, chu vi, diện tích của hình thoi, hình vuông" },
     { "code": "3", "title": "Chứng minh tứ giác là hình thoi; điều kiện để là hình thoi" },
     { "code": "4", "title": "Chứng minh tứ giác là hình vuông; điều kiện để là hình vuông" },
     { "code": "5", "title": "Vận dụng tính chất hình thoi, hình vuông để chứng minh" },
     { "code": "6", "title": "Bài toán thực tế" }
    ]}
   ]},
   { "code": "C4", "title": "Chương 4: Định lí Thalès", "lessons": [
    { "code": "15", "title": "Bài 15: Định lí Thalès trong tam giác", "types": [
     { "code": "1", "title": "Tỉ số của hai đoạn thẳng; đoạn thẳng tỉ lệ" },
     { "code": "2", "title": "Định lí Thalès: lập tỉ lệ thức, tính độ dài đoạn thẳng" },
     { "code": "3", "title": "Định lí Thalès đảo: chứng minh hai đường thẳng song song" },
     { "code": "4", "title": "Chứng minh hệ thức, tính tỉ số; bài toán tổng hợp và nâng cao" },
     { "code": "5", "title": "Ứng dụng thực tế: đo chiều cao, khoảng cách; chia đoạn thẳng" }
    ]},
    { "code": "16", "title": "Bài 16: Đường trung bình của tam giác", "types": [
     { "code": "1", "title": "Nhận biết đường trung bình của tam giác; tính độ dài, chu vi" },
     { "code": "2", "title": "Chứng minh song song, trung điểm, thẳng hàng, đẳng thức nhờ đường trung bình" },
     { "code": "3", "title": "Chứng minh tứ giác là hình bình hành, hình thoi, hình chữ nhật, hình vuông nhờ đường trung bình" },
     { "code": "4", "title": "Đường trung bình của hình thang; bài toán nâng cao: quỹ tích, bất đẳng thức" },
     { "code": "5", "title": "Bài toán thực tế" }
    ]},
    { "code": "17", "title": "Bài 17: Tính chất đường phân giác của tam giác", "types": [
     { "code": "1", "title": "Tính độ dài đoạn thẳng, tỉ số nhờ tính chất đường phân giác" },
     { "code": "2", "title": "Chứng minh hệ thức, song song; chứng minh tia phân giác" },
     { "code": "3", "title": "Tính diện tích, chu vi; bài toán tổng hợp và nâng cao" },
     { "code": "4", "title": "Bài toán thực tế" }
    ]}
   ]},
   { "code": "C5", "title": "Chương 5: Dữ liệu và biểu đồ", "lessons": [
    { "code": "18", "title": "Bài 18: Thu thập và phân loại dữ liệu", "types": [
     { "code": "1", "title": "Phương pháp thu thập dữ liệu; thu thập trực tiếp, gián tiếp" },
     { "code": "2", "title": "Phân loại dữ liệu: định tính, định lượng; rời rạc, liên tục" },
     { "code": "3", "title": "Xét tính hợp lí của dữ liệu, của kết luận" },
     { "code": "4", "title": "Đọc và tính toán số liệu từ bảng thống kê" }
    ]},
    { "code": "19", "title": "Bài 19: Biểu diễn dữ liệu bằng bảng, biểu đồ", "types": [
     { "code": "1", "title": "Lựa chọn dạng biểu đồ phù hợp để biểu diễn dữ liệu" },
     { "code": "2", "title": "Vẽ biểu đồ; chuyển dữ liệu giữa bảng và các dạng biểu đồ" },
     { "code": "3", "title": "Đọc và tính toán dữ liệu từ bảng, biểu đồ" }
    ]},
    { "code": "20", "title": "Bài 20: Phân tích số liệu thống kê dựa vào biểu đồ", "types": [
     { "code": "1", "title": "Nhận biết biểu đồ gây hiểu lầm; so sánh các cách biểu diễn cùng dữ liệu" },
     { "code": "2", "title": "Đọc, phân tích dữ liệu từ biểu đồ; nhận xét xu thế, đưa ra quyết định" },
     { "code": "3", "title": "Tính toán từ biểu đồ, bảng: tỉ số, tỉ lệ phần trăm, giá trị" }
    ]}
   ]},
   { "code": "C6", "title": "Chương 6: Phân thức đại số", "lessons": [
    { "code": "21", "title": "Bài 21: Phân thức đại số", "types": [
     { "code": "1", "title": "Nhận biết phân thức; tử thức, mẫu thức" },
     { "code": "2", "title": "Điều kiện xác định của phân thức" },
     { "code": "3", "title": "Tính giá trị của phân thức" },
     { "code": "4", "title": "Hai phân thức bằng nhau; tìm đa thức thỏa mãn đẳng thức" },
     { "code": "5", "title": "Tìm giá trị của biến để phân thức có giá trị cho trước" },
     { "code": "6", "title": "Bài toán thực tế: viết phân thức biểu thị đại lượng" },
     { "code": "7", "title": "Bài toán nâng cao: giá trị lớn nhất, nhỏ nhất; giá trị nguyên; đẳng thức có điều kiện" }
    ]},
    { "code": "22", "title": "Bài 22: Tính chất cơ bản của phân thức đại số", "types": [
     { "code": "1", "title": "Tính chất cơ bản của phân thức; quy tắc đổi dấu" },
     { "code": "2", "title": "Tìm đa thức thích hợp điền vào chỗ trống; biến đổi phân thức theo tử hoặc mẫu cho trước" },
     { "code": "3", "title": "Rút gọn phân thức" },
     { "code": "4", "title": "Chứng minh đẳng thức; chứng minh hai phân thức bằng nhau" },
     { "code": "5", "title": "Rút gọn rồi tính giá trị của phân thức; chứng minh phân thức luôn dương, luôn âm" },
     { "code": "6", "title": "Tìm mẫu thức chung; quy đồng mẫu thức nhiều phân thức" },
     { "code": "7", "title": "Bài toán thực tế; bài toán nâng cao" }
    ]},
    { "code": "23", "title": "Bài 23: Phép cộng và phép trừ phân thức đại số", "types": [
     { "code": "1", "title": "Cộng, trừ phân thức cùng mẫu; cộng, trừ nhờ quy tắc đổi dấu" },
     { "code": "2", "title": "Cộng, trừ phân thức khác mẫu; tìm phân thức chưa biết" },
     { "code": "3", "title": "Bài toán tổng hợp: rút gọn biểu thức, tính giá trị, tìm x, tìm giá trị nguyên" },
     { "code": "4", "title": "Chứng minh đẳng thức; chứng minh giá trị biểu thức không phụ thuộc vào biến" },
     { "code": "5", "title": "Bài toán thực tế" },
     { "code": "6", "title": "Bài toán nâng cao: tính tổng dãy phân thức, biểu thức có điều kiện, xác định hệ số" }
    ]},
    { "code": "24", "title": "Bài 24: Phép nhân và phép chia phân thức đại số", "types": [
     { "code": "1", "title": "Nhân các phân thức; tính nhanh, tính hợp lí" },
     { "code": "2", "title": "Phân thức nghịch đảo; chia phân thức" },
     { "code": "3", "title": "Tìm phân thức chưa biết trong một đẳng thức" },
     { "code": "4", "title": "Thực hiện dãy phép tính cộng, trừ, nhân, chia; rút gọn biểu thức" },
     { "code": "5", "title": "Bài toán tổng hợp: rút gọn rồi tính giá trị, tìm giá trị nguyên; chứng minh biểu thức không phụ thuộc vào biến" },
     { "code": "6", "title": "Bài toán thực tế" },
     { "code": "7", "title": "Bài toán nâng cao: tích, thương dãy phân thức; biểu thức có điều kiện" }
    ]}
   ]},
   { "code": "C7", "title": "Chương 7: Phương trình bậc nhất và hàm số bậc nhất", "lessons": [
    { "code": "25", "title": "Bài 25: Phương trình bậc nhất một ẩn", "types": [
     { "code": "1", "title": "Nghiệm của phương trình; kiểm tra một số có là nghiệm; phương trình tương đương" },
     { "code": "2", "title": "Nhận biết phương trình bậc nhất một ẩn; hệ số a, b; số nghiệm của phương trình ax + b = 0" },
     { "code": "3", "title": "Giải phương trình bậc nhất một ẩn" },
     { "code": "4", "title": "Giải phương trình đưa được về dạng ax + b = 0" },
     { "code": "5", "title": "Phương trình chứa tham số: tìm m để phương trình có nghiệm cho trước; giải và biện luận" },
     { "code": "6", "title": "Lập phương trình từ bài toán thực tế, hình học" },
     { "code": "7", "title": "Bài toán nâng cao: phương trình có dạng đặc biệt" }
    ]},
    { "code": "26", "title": "Bài 26: Giải bài toán bằng cách lập phương trình", "types": [
     { "code": "1", "title": "Biểu diễn một đại lượng bằng biểu thức chứa ẩn" },
     { "code": "2", "title": "Toán chuyển động" },
     { "code": "3", "title": "Toán làm chung – làm riêng, vòi nước" },
     { "code": "4", "title": "Toán năng suất, sản xuất, kế hoạch" },
     { "code": "5", "title": "Toán tỉ lệ phần trăm, mua bán, giá tiền, lãi suất" },
     { "code": "6", "title": "Toán về số, chữ số và phân số" },
     { "code": "7", "title": "Toán về tuổi" },
     { "code": "8", "title": "Toán có nội dung hình học" },
     { "code": "9", "title": "Toán liên môn (nồng độ dung dịch, dinh dưỡng)" },
     { "code": "10", "title": "Các bài toán thực tế khác (số lượng, điểm số, chia đồ vật)" }
    ]},
    { "code": "27", "title": "Bài 27: Khái niệm hàm số và đồ thị của hàm số", "types": [
     { "code": "1", "title": "Khái niệm hàm số; nhận biết đại lượng này là hàm số của đại lượng kia" },
     { "code": "2", "title": "Tính giá trị của hàm số; tìm giá trị của biến; điều kiện xác định của hàm số" },
     { "code": "3", "title": "Mặt phẳng tọa độ: xác định tọa độ của điểm, biểu diễn điểm, góc phần tư" },
     { "code": "4", "title": "Hình học trên mặt phẳng tọa độ: nhận dạng hình; tính độ dài, chu vi, diện tích" },
     { "code": "5", "title": "Đồ thị của hàm số: điểm thuộc đồ thị; vẽ, đọc đồ thị hàm số cho bởi bảng" },
     { "code": "6", "title": "Bài toán thực tế" },
     { "code": "7", "title": "Bài toán nâng cao" }
    ]},
    { "code": "28", "title": "Bài 28: Hàm số bậc nhất và đồ thị của hàm số bậc nhất", "types": [
     { "code": "1", "title": "Nhận biết hàm số bậc nhất; xác định hệ số a, b; điều kiện để hàm số là bậc nhất" },
     { "code": "2", "title": "Tính giá trị của hàm số bậc nhất; lập bảng giá trị" },
     { "code": "3", "title": "Vẽ đồ thị hàm số bậc nhất; điểm thuộc đồ thị; giao điểm với các trục tọa độ" },
     { "code": "4", "title": "Xác định hàm số bậc nhất: tìm hệ số, tham số khi biết giá trị của hàm số hoặc điểm thuộc đồ thị" },
     { "code": "5", "title": "Bài toán thực tế về hàm số bậc nhất" },
     { "code": "6", "title": "Bài toán nâng cao: điểm cố định, khoảng cách, diện tích tam giác tạo bởi đường thẳng và các trục tọa độ" }
    ]},
    { "code": "29", "title": "Bài 29: Hệ số góc của đường thẳng", "types": [
     { "code": "1", "title": "Hệ số góc của đường thẳng; góc tạo bởi đường thẳng và trục Ox" },
     { "code": "2", "title": "Nhận biết vị trí tương đối của hai đường thẳng: song song, cắt nhau, trùng nhau" },
     { "code": "3", "title": "Tìm tham số để hai đường thẳng song song, cắt nhau, trùng nhau, vuông góc" },
     { "code": "4", "title": "Xác định đường thẳng biết hệ số góc, điểm đi qua hoặc quan hệ song song" },
     { "code": "5", "title": "Tọa độ giao điểm của hai đường thẳng; ba đường thẳng đồng quy; giao điểm nằm trên trục tọa độ" },
     { "code": "6", "title": "Bài toán thực tế; bài toán nâng cao" }
    ]}
   ]},
   { "code": "C8", "title": "Chương 8: Mở đầu về tính xác suất của biến cố", "lessons": [
    { "code": "30", "title": "Bài 30: Kết quả có thể và kết quả thuận lợi", "types": [
     { "code": "1", "title": "Liệt kê, đếm các kết quả có thể của một hành động, phép thử" },
     { "code": "2", "title": "Liệt kê, đếm các kết quả thuận lợi cho một biến cố" }
    ]},
    { "code": "31", "title": "Bài 31: Cách tính xác suất của biến cố bằng tỉ số", "types": [
     { "code": "1", "title": "Tính xác suất khi chọn một đối tượng, gieo hoặc quay một lần" },
     { "code": "2", "title": "Tính xác suất trong phép thử nhiều bước hoặc chọn nhiều đối tượng" },
     { "code": "3", "title": "Xác suất của biến cố liên quan đến số tự nhiên (chọn số, thẻ ghi số)" },
     { "code": "4", "title": "Xác suất gắn với bảng số liệu và biểu đồ" },
     { "code": "5", "title": "Bài toán ngược: tìm số lượng khi biết xác suất; so sánh khả năng" },
     { "code": "6", "title": "Khái niệm, tính chất của xác suất; biến cố chắc chắn, biến cố không thể" }
    ]},
    { "code": "32", "title": "Bài 32: Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng", "types": [
     { "code": "1", "title": "Xác suất thực nghiệm và mối liên hệ với xác suất" },
     { "code": "2", "title": "Tính xác suất thực nghiệm từ kết quả thực nghiệm, bảng thống kê" },
     { "code": "3", "title": "Ước lượng xác suất; dự đoán số lần xảy ra của biến cố, số lượng đối tượng" }
    ]}
   ]},
   { "code": "C9", "title": "Chương 9: Tam giác đồng dạng", "lessons": [
    { "code": "33", "title": "Bài 33: Hai tam giác đồng dạng", "types": [
     { "code": "1", "title": "Khái niệm hai tam giác đồng dạng; nhận biết, viết đúng kí hiệu, tỉ số đồng dạng" },
     { "code": "2", "title": "Tính số đo góc, độ dài cạnh, tỉ số, chu vi dựa vào hai tam giác đồng dạng" },
     { "code": "3", "title": "Chứng minh hai tam giác đồng dạng nhờ định nghĩa, định lí về đường thẳng song song với một cạnh" },
     { "code": "4", "title": "Ứng dụng thực tế: đo khoảng cách, chiều cao" }
    ]},
    { "code": "34", "title": "Bài 34: Ba trường hợp đồng dạng của hai tam giác", "types": [
     { "code": "1", "title": "Nhận biết hai tam giác đồng dạng theo các trường hợp; chỉ ra cặp tam giác đồng dạng" },
     { "code": "2", "title": "Chứng minh hai tam giác đồng dạng; chứng minh hai góc bằng nhau" },
     { "code": "3", "title": "Tính độ dài đoạn thẳng, số đo góc, tỉ số, chu vi nhờ tam giác đồng dạng" },
     { "code": "4", "title": "Chứng minh hệ thức giữa các đoạn thẳng; chứng minh song song, vuông góc, tia phân giác (bài toán tổng hợp)" },
     { "code": "5", "title": "Ứng dụng thực tế: đo chiều cao, khoảng cách" }
    ]},
    { "code": "35", "title": "Bài 35: Định lí Pythagore và ứng dụng", "types": [
     { "code": "1", "title": "Tính độ dài cạnh của tam giác vuông bằng định lí Pythagore" },
     { "code": "2", "title": "Nhận biết tam giác vuông bằng định lí Pythagore đảo" },
     { "code": "3", "title": "Tính độ dài đoạn thẳng, chu vi, diện tích của hình nhờ định lí Pythagore" },
     { "code": "4", "title": "Chứng minh hệ thức về bình phương độ dài; bài toán nâng cao" },
     { "code": "5", "title": "Bài toán thực tế" },
     { "code": "6", "title": "Bài toán tổng hợp: định lí Pythagore kết hợp tam giác đồng dạng, đường phân giác" }
    ]},
    { "code": "36", "title": "Bài 36: Các trường hợp đồng dạng của hai tam giác vuông", "types": [
     { "code": "1", "title": "Nhận biết hai tam giác vuông đồng dạng; các trường hợp đồng dạng của tam giác vuông" },
     { "code": "2", "title": "Chứng minh hai tam giác vuông đồng dạng; chứng minh hệ thức, tính chất hình học" },
     { "code": "3", "title": "Tính độ dài, số đo góc, diện tích; tỉ số diện tích hai tam giác đồng dạng" },
     { "code": "4", "title": "Ứng dụng thực tế: đo chiều cao, khoảng cách" }
    ]},
    { "code": "37", "title": "Bài 37: Hình đồng dạng", "types": [
     { "code": "1", "title": "Nhận biết hình đồng dạng, hình đồng dạng phối cảnh" },
     { "code": "2", "title": "Vẽ hình đồng dạng phối cảnh; xác định tâm, tỉ số; chứng minh hai hình đồng dạng" }
    ]}
   ]},
   { "code": "C10", "title": "Chương 10: Một số hình khối trong thực tiễn", "lessons": [
    { "code": "38", "title": "Bài 38: Hình chóp tam giác đều", "types": [
     { "code": "1", "title": "Nhận biết hình chóp tam giác đều: đỉnh, mặt, cạnh, đường cao, trung đoạn; hình khai triển" },
     { "code": "2", "title": "Tính diện tích xung quanh, diện tích toàn phần của hình chóp tam giác đều" },
     { "code": "3", "title": "Tính thể tích; tính chiều cao, trung đoạn, cạnh đáy của hình chóp tam giác đều" },
     { "code": "4", "title": "Bài toán thực tế" }
    ]},
    { "code": "39", "title": "Bài 39: Hình chóp tứ giác đều", "types": [
     { "code": "1", "title": "Nhận biết hình chóp tứ giác đều: đỉnh, mặt, cạnh, đường cao, trung đoạn; hình khai triển" },
     { "code": "2", "title": "Tính diện tích xung quanh, diện tích toàn phần của hình chóp tứ giác đều" },
     { "code": "3", "title": "Tính thể tích; tính chiều cao, trung đoạn, cạnh đáy của hình chóp tứ giác đều" },
     { "code": "4", "title": "Bài toán thực tế; vật thể ghép từ hình chóp và hình hộp" },
     { "code": "5", "title": "Bài toán nâng cao: hình chóp trong hình lập phương, hình chóp cụt" }
    ]}
   ]}
  ]
 },
 "9": { "code": "9", "title": "Lớp 9",
  "chapters": [
   { "code": "C1", "title": "Chương 1: Phương trình và hệ hai phương trình bậc nhất hai ẩn", "lessons": [
    { "code": "1", "title": "Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn", "types": [
     { "code": "1", "title": "Nhận biết phương trình bậc nhất hai ẩn và hệ hai phương trình bậc nhất hai ẩn" },
     { "code": "2", "title": "Kiểm tra cặp số là nghiệm của phương trình, hệ phương trình" },
     { "code": "3", "title": "Nghiệm tổng quát, biểu diễn hình học tập nghiệm; số nghiệm của hệ" },
     { "code": "4", "title": "Lập phương trình, hệ phương trình bậc nhất hai ẩn từ bài toán thực tế" },
     { "code": "5", "title": "Hàm số bậc nhất y = ax + b và đồ thị (ôn tập)" },
     { "code": "6", "title": "Bài toán thực tế về hàm số bậc nhất" }
    ]},
    { "code": "2", "title": "Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn", "types": [
     { "code": "1", "title": "Giải hệ phương trình bằng phương pháp thế, phương pháp cộng đại số" },
     { "code": "2", "title": "Giải hệ phương trình quy về hệ bậc nhất hai ẩn (biến đổi, đặt ẩn phụ)" },
     { "code": "3", "title": "Tìm hệ số của hệ phương trình khi biết nghiệm" },
     { "code": "4", "title": "Hệ phương trình chứa tham số" },
     { "code": "5", "title": "Xác định đường thẳng, tìm giao điểm của hai đường thẳng bằng hệ phương trình" }
    ]},
    { "code": "3", "title": "Bài 3: Giải bài toán bằng cách lập hệ phương trình", "types": [
     { "code": "1", "title": "Toán chuyển động" },
     { "code": "2", "title": "Toán làm chung – làm riêng, vòi nước" },
     { "code": "3", "title": "Toán năng suất, sản xuất, kế hoạch" },
     { "code": "4", "title": "Toán tỉ lệ phần trăm, mua bán, giá tiền, lãi suất" },
     { "code": "5", "title": "Toán về số, chữ số và phân số" },
     { "code": "6", "title": "Toán về tuổi" },
     { "code": "7", "title": "Toán có nội dung hình học" },
     { "code": "8", "title": "Toán liên môn (Vật lí, Hóa học, Sinh học, dinh dưỡng)" },
     { "code": "9", "title": "Các bài toán thực tế khác (số lượng, điểm số, thể thao, chia nhóm…)" }
    ]}
   ]},
   { "code": "C2", "title": "Chương 2: Phương trình và bất phương trình bậc nhất một ẩn", "lessons": [
    { "code": "4", "title": "Bài 4: Phương trình quy về phương trình bậc nhất một ẩn", "types": [
     { "code": "1", "title": "Giải phương trình bậc nhất một ẩn và phương trình đưa được về dạng ax + b = 0" },
     { "code": "2", "title": "Phương trình tích" },
     { "code": "3", "title": "Điều kiện xác định của phương trình chứa ẩn ở mẫu" },
     { "code": "4", "title": "Giải phương trình chứa ẩn ở mẫu" },
     { "code": "5", "title": "Bài toán thực tế dẫn đến phương trình bậc nhất một ẩn" }
    ]},
    { "code": "5", "title": "Bài 5: Bất đẳng thức và tính chất", "types": [
     { "code": "1", "title": "Nhận biết bất đẳng thức; diễn tả nội dung thực tế bằng bất đẳng thức" },
     { "code": "2", "title": "Tính chất của bất đẳng thức: so sánh, chứng minh dựa vào tính chất" },
     { "code": "3", "title": "Chứng minh bất đẳng thức bằng phép biến đổi tương đương" }
    ]},
    { "code": "6", "title": "Bài 6: Bất phương trình bậc nhất một ẩn", "types": [
     { "code": "1", "title": "Nhận biết bất phương trình bậc nhất một ẩn; kiểm tra một số là nghiệm" },
     { "code": "2", "title": "Giải bất phương trình bậc nhất một ẩn" },
     { "code": "3", "title": "Giải bất phương trình đưa được về dạng bậc nhất; nghiệm nguyên của bất phương trình" },
     { "code": "4", "title": "Bất phương trình chứa tham số" },
     { "code": "5", "title": "Bài toán thực tế dẫn đến bất phương trình bậc nhất một ẩn" }
    ]}
   ]},
   { "code": "C3", "title": "Chương 3: Căn bậc hai và căn bậc ba", "lessons": [
    { "code": "7", "title": "Bài 7: Căn bậc hai và căn thức bậc hai", "types": [
     { "code": "1", "title": "Căn bậc hai, căn bậc hai số học; tính giá trị biểu thức chứa căn" },
     { "code": "2", "title": "Điều kiện xác định của căn thức bậc hai" },
     { "code": "3", "title": "Hằng đẳng thức √(A²) = |A|: tính và rút gọn biểu thức" },
     { "code": "4", "title": "Giải phương trình, bất phương trình chứa căn đơn giản" },
     { "code": "5", "title": "Bài toán thực tế liên quan đến căn bậc hai" }
    ]},
    { "code": "8", "title": "Bài 8: Khai căn bậc hai với phép nhân và phép chia", "types": [
     { "code": "1", "title": "Khai căn bậc hai của một tích; nhân các căn bậc hai" },
     { "code": "2", "title": "Khai căn bậc hai của một thương; chia các căn bậc hai" },
     { "code": "3", "title": "Vận dụng tổng hợp: tính, rút gọn, giải phương trình, bài toán thực tế" }
    ]},
    { "code": "9", "title": "Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai", "types": [
     { "code": "1", "title": "Đưa thừa số ra ngoài, vào trong dấu căn; khử mẫu, trục căn thức ở mẫu" },
     { "code": "2", "title": "Rút gọn, tính giá trị biểu thức số chứa căn; chứng minh đẳng thức số" },
     { "code": "3", "title": "Rút gọn biểu thức chứa căn thức bậc hai có chứa biến" },
     { "code": "4", "title": "Bài toán tổng hợp sau rút gọn: tính giá trị, tìm x, giá trị nguyên, so sánh, cực trị" },
     { "code": "5", "title": "Bài toán thực tế có sử dụng căn thức bậc hai" }
    ]},
    { "code": "10", "title": "Bài 10: Căn bậc ba và căn thức bậc ba", "types": [
     { "code": "1", "title": "Căn bậc ba của một số; tính giá trị biểu thức chứa căn bậc ba" },
     { "code": "2", "title": "Rút gọn biểu thức chứa căn bậc ba; so sánh" },
     { "code": "3", "title": "Giải phương trình chứa căn bậc ba; bài toán thực tế" }
    ]}
   ]},
   { "code": "C4", "title": "Chương 4: Hệ thức lượng trong tam giác vuông", "lessons": [
    { "code": "11", "title": "Bài 11: Tỉ số lượng giác của góc nhọn", "types": [
     { "code": "1", "title": "Định nghĩa tỉ số lượng giác của góc nhọn" },
     { "code": "2", "title": "Tính tỉ số lượng giác khi biết độ dài các cạnh; tính cạnh, góc" },
     { "code": "3", "title": "Tỉ số lượng giác của hai góc phụ nhau, của góc đặc biệt; tính giá trị biểu thức" },
     { "code": "4", "title": "Hệ thức giữa các tỉ số lượng giác; tính, rút gọn, chứng minh" },
     { "code": "5", "title": "Sử dụng máy tính cầm tay tính tỉ số lượng giác, tìm số đo góc" }
    ]},
    { "code": "12", "title": "Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng", "types": [
     { "code": "1", "title": "Hệ thức giữa cạnh và góc trong tam giác vuông; tính cạnh, góc" },
     { "code": "2", "title": "Giải tam giác vuông" },
     { "code": "3", "title": "Ứng dụng thực tế: đo chiều cao, khoảng cách, góc nâng, góc hạ" },
     { "code": "4", "title": "Hệ thức về cạnh và đường cao; tính toán, chứng minh trong tam giác vuông" },
     { "code": "5", "title": "Bài toán hình học tổng hợp có vận dụng hệ thức lượng" }
    ]}
   ]},
   { "code": "C5", "title": "Chương 5: Đường tròn", "lessons": [
    { "code": "13", "title": "Bài 13: Mở đầu về đường tròn", "types": [
     { "code": "1", "title": "Đường tròn, vị trí tương đối của điểm và đường tròn; tính đối xứng" },
     { "code": "2", "title": "Xác định tâm, tính bán kính; chứng minh các điểm cùng thuộc một đường tròn" },
     { "code": "3", "title": "Góc ở tâm, số đo cung; phép quay" }
    ]},
    { "code": "14", "title": "Bài 14: Cung và dây của một đường tròn", "types": [
     { "code": "1", "title": "Đường kính và dây; khoảng cách từ tâm đến dây" },
     { "code": "2", "title": "Góc ở tâm, số đo cung; liên hệ giữa cung và dây" }
    ]},
    { "code": "15", "title": "Bài 15: Vị trí tương đối của đường thẳng và đường tròn", "types": [
     { "code": "1", "title": "Vị trí tương đối của đường thẳng và đường tròn" },
     { "code": "2", "title": "Tiếp tuyến của đường tròn: dấu hiệu, tính chất hai tiếp tuyến cắt nhau; tính độ dài, góc" },
     { "code": "3", "title": "Bài toán hình học tổng hợp về tiếp tuyến" }
    ]},
    { "code": "16", "title": "Bài 16: Vị trí tương đối của hai đường tròn", "types": [
     { "code": "1", "title": "Nhận biết vị trí tương đối của hai đường tròn" },
     { "code": "2", "title": "Tính toán, chứng minh với hai đường tròn (dây chung, tiếp tuyến chung)" }
    ]},
    { "code": "17", "title": "Bài 17: Chu vi và diện tích hình tròn. Diện tích hình quạt tròn", "types": [
     { "code": "1", "title": "Tính chu vi, độ dài cung; diện tích hình tròn, hình quạt tròn, hình vành khuyên" },
     { "code": "2", "title": "Diện tích hình phẳng ghép (hình viên phân, phần tô màu)" },
     { "code": "3", "title": "Bài toán thực tế về chu vi, diện tích hình tròn, hình quạt" },
     { "code": "4", "title": "Bài toán hình học tổng hợp có tính độ dài cung, diện tích hình quạt, viên phân" }
    ]}
   ]},
   { "code": "C6", "title": "Chương 6: Hàm số y = ax^2 (a ≠ 0). Phương trình bậc hai một ẩn", "lessons": [
    { "code": "18", "title": "Bài 18: Hàm số y = ax^2 (a ≠ 0)", "types": [
     { "code": "1", "title": "Tính chất, giá trị của hàm số y = ax²; điểm thuộc đồ thị; xác định hệ số a" },
     { "code": "2", "title": "Vẽ đồ thị hàm số y = ax²; tìm điểm trên parabol thỏa điều kiện cho trước" },
     { "code": "3", "title": "Sự tương giao của parabol và đường thẳng" },
     { "code": "4", "title": "Bài toán thực tế liên quan đến hàm số y = ax²" }
    ]},
    { "code": "19", "title": "Bài 19: Phương trình bậc hai một ẩn", "types": [
     { "code": "1", "title": "Nhận biết phương trình bậc hai một ẩn. Xác định hệ số a, b, c" },
     { "code": "2", "title": "Giải phương trình bậc hai khuyết hệ số; phương trình tích" },
     { "code": "3", "title": "Giải phương trình bậc hai bằng công thức nghiệm" },
     { "code": "4", "title": "Biệt thức Δ, Δ′ và số nghiệm của phương trình bậc hai" },
     { "code": "5", "title": "Phương trình có nghiệm cho trước: tìm hệ số, tìm nghiệm còn lại" },
     { "code": "6", "title": "Phương trình bậc hai chứa tham số" },
     { "code": "7", "title": "Phương trình quy về phương trình bậc hai" },
     { "code": "8", "title": "Vị trí tương đối của parabol và đường thẳng" },
     { "code": "9", "title": "Bài toán thực tế dẫn đến phương trình bậc hai" }
    ]},
    { "code": "20", "title": "Bài 20: Định lí Viète và ứng dụng", "types": [
     { "code": "1", "title": "Tổng và tích hai nghiệm; nhẩm nghiệm; biết một nghiệm tìm nghiệm còn lại" },
     { "code": "2", "title": "Tính giá trị biểu thức chứa hai nghiệm (không giải phương trình)" },
     { "code": "3", "title": "Tìm hai số biết tổng và tích; lập phương trình bậc hai biết hai nghiệm" },
     { "code": "4", "title": "Phương trình chứa tham số: hệ thức giữa các nghiệm, dấu các nghiệm, cực trị" },
     { "code": "5", "title": "Ứng dụng định lí Viète vào sự tương giao của parabol và đường thẳng" }
    ]},
    { "code": "21", "title": "Bài 21: Giải bài toán bằng cách lập phương trình", "types": [
     { "code": "1", "title": "Toán chuyển động" },
     { "code": "2", "title": "Toán làm chung – làm riêng, vòi nước" },
     { "code": "3", "title": "Toán năng suất, kế hoạch; bài toán chia đều (đội xe, xếp ghế, chia quà)" },
     { "code": "4", "title": "Toán tỉ lệ phần trăm, mua bán, giá tiền, lãi suất" },
     { "code": "5", "title": "Toán về số, chữ số và phân số" },
     { "code": "6", "title": "Toán về tuổi" },
     { "code": "7", "title": "Toán có nội dung hình học" },
     { "code": "8", "title": "Toán liên môn (nồng độ dung dịch, hợp kim, khối lượng riêng)" },
     { "code": "9", "title": "Các bài toán thực tế khác" }
    ]}
   ]},
   { "code": "C7", "title": "Chương 7: Tần số và tần số tương đối", "lessons": [
    { "code": "22", "title": "Bài 22: Bảng tần số và biểu đồ tần số", "types": [
     { "code": "1", "title": "Đọc bảng tần số: giá trị, tần số, cỡ mẫu" },
     { "code": "2", "title": "Lập bảng tần số; vẽ biểu đồ tần số (cột, đoạn thẳng)" },
     { "code": "3", "title": "Đọc và phân tích biểu đồ tần số" },
     { "code": "4", "title": "Tính toán từ bảng tần số: số trung bình, giá trị bị thiếu, tỉ lệ phần trăm" }
    ]},
    { "code": "23", "title": "Bài 23: Bảng tần số tương đối và biểu đồ tần số tương đối", "types": [
     { "code": "1", "title": "Tính tần số tương đối của một giá trị" },
     { "code": "2", "title": "Lập bảng tần số tương đối; vẽ biểu đồ tần số tương đối (cột, hình quạt tròn)" },
     { "code": "3", "title": "Đọc, phân tích biểu đồ tần số tương đối; tính ngược tần số, cỡ mẫu; bài toán thực tế" }
    ]},
    { "code": "24", "title": "Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ", "types": [
     { "code": "1", "title": "Đọc bảng tần số ghép nhóm: tần số, tần số tương đối, giá trị đại diện của nhóm" },
     { "code": "2", "title": "Lập bảng tần số, tần số tương đối ghép nhóm" },
     { "code": "3", "title": "Biểu đồ tần số, tần số tương đối ghép nhóm: đọc, vẽ, phân tích" }
    ]}
   ]},
   { "code": "C8", "title": "Chương 8: Xác suất của biến cố trong một số mô hình xác suất đơn giản", "lessons": [
    { "code": "25", "title": "Bài 25: Phép thử ngẫu nhiên và không gian mẫu", "types": [
     { "code": "1", "title": "Phép thử ngẫu nhiên; mô tả không gian mẫu" },
     { "code": "2", "title": "Đếm số phần tử của không gian mẫu" },
     { "code": "3", "title": "Kết quả đồng khả năng; kết quả thuận lợi cho biến cố" }
    ]},
    { "code": "26", "title": "Bài 26: Xác suất của biến cố liên quan tới phép thử", "types": [
     { "code": "1", "title": "Kết quả thuận lợi cho một biến cố" },
     { "code": "2", "title": "Tính xác suất khi chọn một đối tượng, gieo hoặc quay một lần" },
     { "code": "3", "title": "Tính xác suất trong phép thử nhiều bước hoặc chọn nhiều đối tượng" },
     { "code": "4", "title": "Xác suất của biến cố liên quan đến số tự nhiên (chọn số, lập số)" },
     { "code": "5", "title": "Xác suất gắn với bảng số liệu và biểu đồ" },
     { "code": "6", "title": "Xác suất thực nghiệm; bài toán ngược: tìm số lượng, ước lượng" },
     { "code": "7", "title": "Trò chơi, so sánh khả năng; xác suất liên môn và nâng cao" }
    ]}
   ]},
   { "code": "C9", "title": "Chương 9: Đường tròn ngoại tiếp và đường tròn nội tiếp", "lessons": [
    { "code": "27", "title": "Bài 27: Góc nội tiếp", "types": [
     { "code": "1", "title": "Nhận biết góc nội tiếp; liên hệ góc nội tiếp, góc ở tâm và cung bị chắn" },
     { "code": "2", "title": "Tính số đo góc, số đo cung; tính độ dài, diện tích liên quan" },
     { "code": "3", "title": "Góc tạo bởi tia tiếp tuyến và dây, góc có đỉnh ở bên trong hoặc bên ngoài đường tròn" },
     { "code": "4", "title": "Chứng minh góc bằng nhau, hệ thức, tam giác đồng dạng" },
     { "code": "5", "title": "Bài toán tổng hợp có cực trị, vị trí điểm" }
    ]},
    { "code": "28", "title": "Bài 28: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác", "types": [
     { "code": "1", "title": "Khái niệm đường tròn ngoại tiếp, nội tiếp tam giác; xác định tâm" },
     { "code": "2", "title": "Đường tròn ngoại tiếp, nội tiếp tam giác vuông" },
     { "code": "3", "title": "Đường tròn ngoại tiếp, nội tiếp tam giác đều" },
     { "code": "4", "title": "Đường tròn ngoại tiếp, nội tiếp hình vuông, hình chữ nhật và tam giác khác" },
     { "code": "5", "title": "Bài toán tổng hợp: chứng minh, xác định tâm và tính bán kính" }
    ]},
    { "code": "29", "title": "Bài 29: Tứ giác nội tiếp", "types": [
     { "code": "1", "title": "Nhận biết tứ giác nội tiếp; tính chất tổng hai góc đối" },
     { "code": "2", "title": "Tính số đo góc, độ dài, diện tích trong tứ giác nội tiếp" },
     { "code": "3", "title": "Chứng minh tứ giác nội tiếp, bốn điểm cùng thuộc một đường tròn" },
     { "code": "4", "title": "Bài toán tổng hợp: chứng minh hệ thức, thẳng hàng, song song, vuông góc, tiếp tuyến" },
     { "code": "5", "title": "Bài toán tổng hợp có tính độ dài, diện tích, tỉ số" },
     { "code": "6", "title": "Bài toán tổng hợp có cực trị, điểm cố định, đại lượng không đổi" }
    ]},
    { "code": "30", "title": "Bài 30: Đa giác đều", "types": [
     { "code": "1", "title": "Nhận biết đa giác đều; số đo góc, cung, số đường chéo" },
     { "code": "2", "title": "Phép quay; phép quay biến đa giác đều thành chính nó" },
     { "code": "3", "title": "Tính độ dài, chu vi, diện tích liên quan đến đa giác đều" }
    ]}
   ]},
   { "code": "C10", "title": "Chương 10: Một số hình khối trong thực tiễn", "lessons": [
    { "code": "31", "title": "Bài 31: Hình trụ và hình nón", "types": [
     { "code": "1", "title": "Nhận biết hình trụ, hình nón và các yếu tố; công thức" },
     { "code": "2", "title": "Tính diện tích, thể tích hình trụ" },
     { "code": "3", "title": "Tính đường sinh, diện tích, thể tích hình nón" },
     { "code": "4", "title": "Hình trụ, hình nón tạo thành khi quay hình chữ nhật, tam giác vuông" },
     { "code": "5", "title": "Bài toán thực tế về hình trụ" },
     { "code": "6", "title": "Bài toán thực tế về hình nón, hình nón cụt" },
     { "code": "7", "title": "Bài toán kết hợp nhiều hình: trụ, nón, cầu, hộp (ghép hình, nước dâng)" }
    ]},
    { "code": "32", "title": "Bài 32: Hình cầu", "types": [
     { "code": "1", "title": "Nhận biết hình cầu, mặt cầu; công thức diện tích mặt cầu, thể tích hình cầu" },
     { "code": "2", "title": "Tính diện tích mặt cầu, thể tích hình cầu" },
     { "code": "3", "title": "Bài toán thực tế về hình cầu" },
     { "code": "4", "title": "Bài toán kết hợp hình cầu với hình trụ, hình nón, hình hộp" }
    ]}
   ]},
   { "code": "C11", "title": "Chuyên đề nâng cao (HSG / thi chuyên)", "lessons": [
    { "code": "33", "title": "Bài 33: Số học — chia hết, số nguyên tố, phương trình nghiệm nguyên", "types": [
     { "code": "1", "title": "Quan hệ chia hết; chứng minh chia hết" },
     { "code": "2", "title": "Số nguyên tố, hợp số" },
     { "code": "3", "title": "Số chính phương, lập phương" },
     { "code": "4", "title": "Phương trình nghiệm nguyên, nghiệm hữu tỉ" },
     { "code": "5", "title": "Bài toán số học thực tế, suy luận" }
    ]},
    { "code": "34", "title": "Bài 34: Bất đẳng thức và cực trị", "types": [
     { "code": "1", "title": "Chứng minh bất đẳng thức" },
     { "code": "2", "title": "Tìm giá trị lớn nhất, nhỏ nhất của biểu thức" },
     { "code": "3", "title": "Bài toán cực trị thực tế: doanh thu, chi phí, diện tích, thể tích, quãng đường" }
    ]},
    { "code": "35", "title": "Bài 35: Phương trình và hệ phương trình nâng cao", "types": [
     { "code": "1", "title": "Phương trình vô tỉ" },
     { "code": "2", "title": "Phương trình bậc cao, chứa ẩn ở mẫu; phương trình nhiều ẩn" },
     { "code": "3", "title": "Hệ phương trình" },
     { "code": "4", "title": "Phương trình, hệ phương trình chứa tham số; bài toán về nghiệm" }
    ]},
    { "code": "36", "title": "Bài 36: Biến đổi đại số và rút gọn biểu thức nâng cao", "types": [
     { "code": "1", "title": "Tính giá trị biểu thức có điều kiện" },
     { "code": "2", "title": "Chứng minh đẳng thức đại số" },
     { "code": "3", "title": "Đa thức: giá trị, phép chia, xác định đa thức" }
    ]},
    { "code": "37", "title": "Bài 37: Hình học phẳng nâng cao", "types": [
     { "code": "1", "title": "Chứng minh thẳng hàng, đồng quy, cùng thuộc đường tròn, song song, vuông góc" },
     { "code": "2", "title": "Chứng minh hệ thức, góc bằng nhau; tính toán hình học" },
     { "code": "3", "title": "Cực trị hình học, điểm cố định" }
    ]},
    { "code": "38", "title": "Bài 38: Tổ hợp, rời rạc và suy luận logic", "types": [
     { "code": "1", "title": "Trò chơi và chiến lược thắng" },
     { "code": "2", "title": "Nguyên lí Dirichlet; bài toán tồn tại" },
     { "code": "3", "title": "Đếm, bảng ô vuông, tô màu, dãy số và tập hợp" },
     { "code": "4", "title": "Suy luận logic thực tế: thi đấu vòng tròn, lịch, nhóm người" },
     { "code": "5", "title": "Bất biến trong các quá trình biến đổi" }
    ]}
   ]}
  ]
 },
 "0": { "code": "0", "title": "Lớp 10",
  "D": [
   { "code": "1", "title": "Chương 1. Mệnh đề. Tập hợp", "lessons": [
    { "code": "1", "title": "Bài 1. Mệnh đề", "types": [
     { "code": "1", "title": "Xác định mệnh đề, mệnh đề chứa biến" },
     { "code": "2", "title": "Tính đúng-sai của mệnh đề" },
     { "code": "3", "title": "Phủ định của một mệnh đề" },
     { "code": "4", "title": "Mệnh đề kéo theo, mệnh đề đảo, mệnh đề tương đương" },
     { "code": "5", "title": "Mệnh đề với mọi, tồn tại (và phủ định chúng)" },
     { "code": "6", "title": "Áp dụng mệnh đề vào suy luận có lí" }
    ]},
    { "code": "2", "title": "Bài 2. Tập hợp", "types": [
     { "code": "1", "title": "Tập hợp và phần tử của tập hợp" },
     { "code": "2", "title": "Tập hợp con. Hai tập hợp bằng nhau" },
     { "code": "3", "title": "Ký hiệu khoảng, đoạn, nửa khoảng" }
    ]},
    { "code": "3", "title": "Bài 3. Các phép toán tập hợp", "types": [
     { "code": "1", "title": "Giao và hợp của hai tập hợp (rời rạc)" },
     { "code": "2", "title": "Hiệu và phần bù của hai tập hợp (rời rạc)" },
     { "code": "3", "title": "Giao và hợp (dùng đoạn, khoảng)" },
     { "code": "4", "title": "Hiệu và phần bù (dùng đoạn, khoảng)" },
     { "code": "5", "title": "Toán thực tế ứng dụng của tập hợp" }
    ]}
   ]},
   { "code": "2", "title": "Chương 2. BPT và hệ BPT bậc nhất hai ẩn", "lessons": [
    { "code": "1", "title": "Bài 1. Bất phương trình bậc nhất hai ẩn", "types": [
     { "code": "1", "title": "Các khái niệm về BPT bậc nhất hai ẩn" },
     { "code": "2", "title": "Miền nghiệm của BPT bậc nhất hai ẩn" },
     { "code": "3", "title": "Toán thực tế về BPT bậc nhất hai ẩn" }
    ]},
    { "code": "2", "title": "Bài 2. Hệ bất phương trình bậc nhất hai ẩn", "types": [
     { "code": "1", "title": "Các khái niệm về Hệ BPT bậc nhất hai ẩn" },
     { "code": "2", "title": "Miền nghiệm của Hệ BPT bậc nhất hai ẩn" },
     { "code": "3", "title": "Toán thực tế về Hệ BPT bậc nhất hai ẩn" }
    ]}
   ]},
   { "code": "3", "title": "Chương 3. Hàm số bậc hai và đồ thị", "lessons": [
    { "code": "1", "title": "Bài 1. Hàm số và đồ thị", "types": [
     { "code": "1", "title": "Xác định một hàm số" },
     { "code": "2", "title": "Tập xác định của hàm số" },
     { "code": "3", "title": "Giá trị của hàm số" },
     { "code": "4", "title": "Đồ thị của hàm số" },
     { "code": "5", "title": "Tính đồng biến, nghịch biến" },
     { "code": "6", "title": "Tính chẵn, lẻ" },
     { "code": "7", "title": "Toán thực tế về hàm số" }
    ]},
    { "code": "2", "title": "Bài 2. Hàm số bậc hai", "types": [
     { "code": "1", "title": "Xác định hàm số bậc hai" },
     { "code": "2", "title": "Bảng biến thiên, tính đơn điệu, max, min" },
     { "code": "3", "title": "Đồ thị của hàm số bậc hai" },
     { "code": "4", "title": "Bài toán về sự tương giao" },
     { "code": "5", "title": "Hàm số chứa dấu giá trị tuyệt đối" },
     { "code": "6", "title": "Toán thực tế ứng dụng hàm số bậc hai" }
    ]}
   ]},
   { "code": "6", "title": "Chương 6. Thống kê", "lessons": [
    { "code": "1", "title": "Bài 1. Số gần đúng. Sai số", "types": [
     { "code": "1", "title": "Tính và ước lượng sai số tuyệt đối, tương đối" },
     { "code": "2", "title": "Tính và xác định độ chính xác của kết quả" },
     { "code": "3", "title": "Quy tròn số gần đúng" },
     { "code": "4", "title": "Viết số gần đúng cho số đúng biết độ chính xác" }
    ]},
    { "code": "2", "title": "Bài 2. Mô tả và biểu diễn dữ liệu trên các bảng và biểu đồ", "types": [
     { "code": "1", "title": "Đọc và phân tích thông tin trên bảng số liệu" },
     { "code": "2", "title": "Đọc và phân tích thông tin trên biểu đồ" },
     { "code": "3", "title": "Số liệu bất thường trên bảng số liệu" },
     { "code": "4", "title": "Số liệu bất thường trên biểu đồ" }
    ]},
    { "code": "3", "title": "Bài 3. Các số đặc trưng đo xu thế trung tâm của mẫu số liệu", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Số trung bình cộng" },
     { "code": "3", "title": "Số trung vị" },
     { "code": "4", "title": "Tứ phân vị" },
     { "code": "5", "title": "Mốt" }
    ]},
    { "code": "4", "title": "Bài 4. Các số đặc trưng đo mức độ phân tán của mẫu số liệu", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Khoảng biến thiên, khoảng tứ phân vị" },
     { "code": "3", "title": "Giá trị bất thường của mẫu số liệu" },
     { "code": "4", "title": "Phương sai, độ lệch chuẩn của mẫu số liệu" },
     { "code": "5", "title": "Dạng 5" }
    ]}
   ]},
   { "code": "7", "title": "Chương 7. Bất phương trình bậc 2 một ẩn", "lessons": [
    { "code": "1", "title": "Bài 1. Dấu của tam thức bậc 2", "types": [
     { "code": "1", "title": "Xác định tam thức bậc 2" },
     { "code": "2", "title": "Dấu của tam thức bậc 2 và ứng dụng" },
     { "code": "3", "title": "Bài toán xét dấu biết BXD, đồ thị" },
     { "code": "4", "title": "Xét dấu biểu thức dạng tích, thương" },
     { "code": "5", "title": "Toán thực tế ứng dụng dấu tam thức bậc 2" }
    ]},
    { "code": "2", "title": "Bài 2. Giải bất phương trình bậc 2 một ẩn", "types": [
     { "code": "1", "title": "Bất phương trình bậc 2 và ứng dụng" },
     { "code": "2", "title": "Giải bất phương trình bậc hai biết BXD, đồ thị" },
     { "code": "3", "title": "Bất phương trình dạng tích, thương" },
     { "code": "4", "title": "Hệ bất phương trình BPT bậc 2" },
     { "code": "5", "title": "Bất phương trình chứa căn, | · |" },
     { "code": "6", "title": "Bài toán có tham số m" },
     { "code": "7", "title": "Toán thực tế ứng dụng bất phương trình bậc 2 một ẩn" }
    ]},
    { "code": "3", "title": "Bài 3. Phương trình quy về phương trình bậc hai", "types": [
     { "code": "1", "title": "Phương trình căn √(f(x)) = √(g(x)) và mở rộng" },
     { "code": "2", "title": "Phương trình căn √(f(x)) = g(x) và mở rộng" },
     { "code": "3", "title": "Phương trình căn thức có tham số" },
     { "code": "4", "title": "Phương trình căn thức (dạng khác)" },
     { "code": "5", "title": "Phương trình khác quy về phương trình bậc 2" },
     { "code": "6", "title": "Toán hình, toán thực tế ứng dụng phương trình quy về bậc 2" }
    ]}
   ]},
   { "code": "8", "title": "Chương 8. Đại số tổ hợp", "lessons": [
    { "code": "1", "title": "Bài 1. Quy tắc cộng-quy tắc nhân", "types": [
     { "code": "1", "title": "Bài toán chỉ sử dụng quy tắc cộng" },
     { "code": "2", "title": "Bài toán chỉ sử dụng quy tắc nhân" },
     { "code": "3", "title": "Bài toán kết hợp quy tắc cộng và quy tắc nhân" },
     { "code": "4", "title": "Bài toán dùng quy tắc bù trừ" },
     { "code": "5", "title": "Bài toán đếm số tự nhiên" },
     { "code": "6", "title": "Sơ đồ hình cây" }
    ]},
    { "code": "2", "title": "Bài 2. Hoán vị. Chỉnh hợp. Tổ hợp", "types": [
     { "code": "1", "title": "Lý thuyết tổng hợp về P, C, A" },
     { "code": "2", "title": "Bài toán có biểu thức P, C, A" },
     { "code": "3", "title": "Bài toán đếm số tự nhiên" },
     { "code": "4", "title": "Bài toán chọn người" },
     { "code": "5", "title": "Bài toán chọn đối tượng khác" },
     { "code": "6", "title": "Bài toán có yếu tố hình học" },
     { "code": "7", "title": "Bài toán xếp chỗ (không tròn, không lặp)" },
     { "code": "8", "title": "Hoán vị bàn tròn" },
     { "code": "9", "title": "Hoán vị lặp" }
    ]},
    { "code": "3", "title": "Bài 3. Nhị thức Newton", "types": [
     { "code": "1", "title": "Các câu hỏi lý thuyết tổng hợp" },
     { "code": "2", "title": "Khai triển một nhị thức Newton" },
     { "code": "3", "title": "Tìm hệ số, số hạng trong khai triển bằng tam giác Pascal" },
     { "code": "4", "title": "Tìm hệ số, số hạng trong khai triển" },
     { "code": "5", "title": "Tính tổng nhờ khai triển nhị thức Newton" },
     { "code": "6", "title": "Toán tổ hợp có dùng nhị thức Newton" }
    ]}
   ]},
   { "code": "0", "title": "Chương 10. Xác suất", "lessons": [
    { "code": "1", "title": "Bài 1. Không gian mẫu và biến cố", "types": [
     { "code": "1", "title": "Các câu hỏi lý thuyết tổng hợp" },
     { "code": "2", "title": "Mô tả không gian mẫu, biến cố" },
     { "code": "3", "title": "Đếm phần tử không gian mẫu, biến cố" }
    ]},
    { "code": "2", "title": "Bài 2. Xác suất của biến cố", "types": [
     { "code": "1", "title": "Các câu hỏi lý thuyết tổng hợp" },
     { "code": "2", "title": "Liên quan xúc xắc, đồng tiền (PP liệt kê)" },
     { "code": "3", "title": "Liên quan việc sắp xếp chỗ" },
     { "code": "4", "title": "Liên quan việc chọn người" },
     { "code": "5", "title": "Liên quan việc chọn đối tượng khác" },
     { "code": "6", "title": "Liên quan hình học" },
     { "code": "7", "title": "Liên quan việc đếm số" },
     { "code": "8", "title": "Liên quan bàn tròn hoặc hoán vị lặp" },
     { "code": "9", "title": "Liên quan vấn đề khác" }
    ]}
   ]}
  ],
  "H": [
   { "code": "4", "title": "Chương 4. Hệ thức lượng trong tam giác", "lessons": [
    { "code": "1", "title": "Bài 1. Giá trị lượng giác của góc (0 − 180∘)", "types": [
     { "code": "1", "title": "Xét dấu của biểu thức lượng giác" },
     { "code": "2", "title": "Tính các giá trị lượng giác" },
     { "code": "3", "title": "Biến đổi, rút gọn biểu thức lượng giác" }
    ]},
    { "code": "2", "title": "Bài 2. Định lý sin và định lý côsin", "types": [
     { "code": "1", "title": "Bài toán chỉ dùng định lý Sin, Côsin" },
     { "code": "2", "title": "Bài toán có dùng công thức diện tích" },
     { "code": "3", "title": "Biến đổi, rút gọn biểu thức" },
     { "code": "4", "title": "Nhận dạng tam giác" }
    ]},
    { "code": "3", "title": "Bài 3. Giải tam giác và ứng dụng thực tế", "types": [
     { "code": "1", "title": "Giải tam giác" },
     { "code": "2", "title": "Các ứng dụng thực tế" }
    ]}
   ]},
   { "code": "5", "title": "Chương 5. Véctơ (chưa xét tọa độ)", "lessons": [
    { "code": "1", "title": "Bài 1. Khái niệm véctơ", "types": [
     { "code": "1", "title": "Xác định một véctơ" },
     { "code": "2", "title": "Xét phương và hướng của các véctơ" },
     { "code": "3", "title": "Hai véctơ bằng nhau" },
     { "code": "4", "title": "Hai véctơ đối nhau" },
     { "code": "5", "title": "Độ dài của một véctơ" },
     { "code": "6", "title": "Toán thực tế áp dụng véctơ" }
    ]},
    { "code": "2", "title": "Bài 2. Tổng và hiệu của hai véctơ", "types": [
     { "code": "1", "title": "Tính toán, thu gọn hiệu các véctơ" },
     { "code": "2", "title": "Tính đúng-sai của 1 đẳng thức véctơ" },
     { "code": "3", "title": "Tìm điểm nhờ đẳng thức véctơ" },
     { "code": "4", "title": "Tính độ dài của véctơ tổng, hiệu" },
     { "code": "5", "title": "Cực trị hình học" },
     { "code": "6", "title": "Toán thực tế áp dụng tổng hiệu véctơ" }
    ]},
    { "code": "3", "title": "Bài 3. Tích của một số với véctơ", "types": [
     { "code": "1", "title": "Xác định k.v⃗ và độ dài của nó" },
     { "code": "2", "title": "Biến đổi, thu gọn 1 đẳng thức véctơ" },
     { "code": "3", "title": "Tìm điểm nhờ đẳng thức véctơ" },
     { "code": "4", "title": "Sự cùng phương của 2 véctơ và ứng dụng" },
     { "code": "5", "title": "Phân tích 1 véctơ theo 2 véctơ không cùng phương" },
     { "code": "6", "title": "Tính độ dài của véctơ tổng, hiệu" },
     { "code": "7", "title": "Tập hợp điểm" },
     { "code": "8", "title": "Cực trị hình học" },
     { "code": "9", "title": "Toán thực tế áp dụng tích 1 số với véctơ" }
    ]},
    { "code": "4", "title": "Bài 4. Tích vô hướng (chưa xét tọa độ)", "types": [
     { "code": "1", "title": "Tích vô hướng, góc giữa 2 véctơ" },
     { "code": "2", "title": "Tìm góc nhờ tích vô hướng" },
     { "code": "3", "title": "Đẳng thức về tích vô hướng hoặc độ dài" },
     { "code": "4", "title": "Điều kiện vuông góc" },
     { "code": "5", "title": "Các bài toán tìm điểm và tập hợp điểm" },
     { "code": "6", "title": "Cực trị và chứng minh bất đẳng thức" },
     { "code": "7", "title": "Toán thực tế áp dụng tích vô hướng" }
    ]}
   ]},
   { "code": "9", "title": "Chương 9. Phương pháp toạ độ trong mặt phẳng (Oxy)", "lessons": [
    { "code": "1", "title": "Bài 1. Toạ độ của véctơ", "types": [
     { "code": "1", "title": "Tọa độ điểm, độ dài đại số của véctơ trên 1 trục" },
     { "code": "2", "title": "Phép toán véctơ (tổng, hiệu, tích với số) trong Oxy" },
     { "code": "3", "title": "Tọa độ điểm và véctơ trên hệ trục Oxy" },
     { "code": "4", "title": "Sự cùng phương của 2 véctơ và ứng dụng" },
     { "code": "5", "title": "Phân tích một véctơ theo 2 véctơ không cùng phương" },
     { "code": "6", "title": "Toán thực tế dùng hệ toạ độ" }
    ]},
    { "code": "2", "title": "Bài 2. Tích vô hướng (theo tọa độ)", "types": [
     { "code": "1", "title": "Tích vô hướng, góc giữa 2 véctơ" },
     { "code": "2", "title": "Tìm góc nhờ tích vô hướng" },
     { "code": "3", "title": "Đẳng thức về tích vô hướng hoặc độ dài" },
     { "code": "4", "title": "Điều kiện vuông góc" },
     { "code": "5", "title": "Các bài toán tìm điểm và tập hợp điểm" },
     { "code": "6", "title": "Cực trị và chứng minh bất đẳng thức" },
     { "code": "7", "title": "Toán thực tế, liên môn" }
    ]},
    { "code": "3", "title": "Bài 3. Đường thẳng trong mặt phẳng toạ độ", "types": [
     { "code": "1", "title": "Điểm, véctơ, hệ số góc của đường thẳng" },
     { "code": "2", "title": "Phương trình đường thẳng" },
     { "code": "3", "title": "Vị trí tương đối giữa hai đường thẳng" },
     { "code": "4", "title": "Bài toán về góc giữa hai đường thẳng" },
     { "code": "5", "title": "Bài toán về khoảng cách" },
     { "code": "6", "title": "Bài toán tìm điểm" },
     { "code": "7", "title": "Bài toán dùng cho tam giác, tứ giác" },
     { "code": "8", "title": "Bài toán thực tế, PP tọa độ hóa" },
     { "code": "9", "title": "Bài toán có dùng PT chính tắc" }
    ]},
    { "code": "4", "title": "Bài 4. Đường tròn trong mặt phẳng toạ độ", "types": [
     { "code": "1", "title": "Tìm tâm, bán kính và điều kiện là đường tròn" },
     { "code": "2", "title": "Phương trình đường tròn" },
     { "code": "3", "title": "Phương trình tiếp tuyến của đường tròn" },
     { "code": "4", "title": "Vị trí tương đối liên quan đường tròn" },
     { "code": "5", "title": "Toán tổng hợp đường thẳng và đường tròn" },
     { "code": "6", "title": "Bài toán dùng cho tam giác, tứ giác" },
     { "code": "7", "title": "Bài toán thực tế, PP tọa độ hóa" }
    ]},
    { "code": "5", "title": "Bài 5. Ba đường conic trong mặt phẳng toạ độ", "types": [
     { "code": "0", "title": "Bài toán tổng hợp/thực tế, PP tọa độ hóa 3 đường conic" },
     { "code": "1", "title": "Xác định các yếu tố của elip" },
     { "code": "2", "title": "Phương trình chính tắc của elip" },
     { "code": "3", "title": "Bài toán điểm trên elip" },
     { "code": "4", "title": "Xác định các yếu tố của hypebol" },
     { "code": "5", "title": "Phương trình chính tắc của hypebol" },
     { "code": "6", "title": "Bài toán điểm trên hypebol" },
     { "code": "7", "title": "Xác định các yếu tố của parabol" },
     { "code": "8", "title": "Phương trình chính tắc của parabol" },
     { "code": "9", "title": "Bài toán điểm trên parabol" }
    ]}
   ]}
  ],
  "C": [
   { "code": "1", "title": "Chuyên đề 1. Hệ phương trình bậc nhất 3 ẩn và ứng dụng", "lessons": [
    { "code": "1", "title": "Bài 1. Hệ phương trình bậc nhất 3 ẩn và ứng dụng", "types": [
     { "code": "1", "title": "Các khái niệm về Hệ PT bậc nhất 3 ẩn" },
     { "code": "2", "title": "Giải Hệ PT bậc nhất 3 ẩn" },
     { "code": "3", "title": "Toán thực tế ứng dụng Hệ PT bậc nhất 3 ẩn" }
    ]}
   ]},
   { "code": "2", "title": "Chuyên đề 2. Phương pháp quy nạp toán học", "lessons": [
    { "code": "1", "title": "Bài 1. Phương pháp quy nạp toán học", "types": [
     { "code": "1", "title": "Quy nạp chứng minh các đẳng thức/công thức/chia hết" },
     { "code": "2", "title": "Quy nạp chứng minh các bất đẳng thức" }
    ]}
   ]}
  ]
 },
 "1": { "code": "1", "title": "Lớp 11",
  "D": [
   { "code": "1", "title": "Chương 1. Hàm số lượng giác và phương trình lượng giác", "lessons": [
    { "code": "1", "title": "Bài 1. Góc lượng giác", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Chuyển đổi đơn vị độ và radian" },
     { "code": "3", "title": "Số đo của một góc lượng giác" },
     { "code": "4", "title": "Độ dài của một cung tròn" },
     { "code": "5", "title": "Đường tròn lượng giác và ứng dụng" },
     { "code": "6", "title": "Toán thực tế áp dụng góc lượng giác" }
    ]},
    { "code": "2", "title": "Bài 2. Giá trị lượng giác của một góc lượng giác", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Xét dấu giá trị lượng giác. Tính giá trị lượng giác của một góc" },
     { "code": "3", "title": "Biến đổi, rút gọn biểu thức lượng giác; chứng minh đẳng thức lượng giác" },
     { "code": "4", "title": "Các góc lượng giác có liên quan đặc biệt: bù nhau, phụ nhau, đối nhau, hơn kém nhau π" },
     { "code": "5", "title": "Toán thực tế áp dụng giá trị của một góc lượng giác" }
    ]},
    { "code": "3", "title": "Bài 3. Các công thức lượng giác", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Áp dụng công thức cộng" },
     { "code": "3", "title": "Áp dụng công thức nhân đôi - hạ bậc" },
     { "code": "4", "title": "Áp dụng công thức biến đổi tích <-> tổng" },
     { "code": "5", "title": "Kết hợp nhiều công thức lượng giác" },
     { "code": "6", "title": "Nhận dạng tam giác" },
     { "code": "7", "title": "Toán thực tế áp dụng công thức lượng giác" }
    ]},
    { "code": "4", "title": "Bài 4. Hàm số lượng giác và đồ thị", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Tìm tập xác định" },
     { "code": "3", "title": "Xét tính đơn điệu" },
     { "code": "4", "title": "Xét tính chẵn, lẻ" },
     { "code": "5", "title": "Xét tính tuần hoàn, tìm chu kỳ" },
     { "code": "6", "title": "Tìm tập giá trị và min, max" },
     { "code": "7", "title": "Bảng biến thiên và đồ thị" },
     { "code": "8", "title": "Toán thực tế áp dụng hàm số lượng giác" }
    ]},
    { "code": "5", "title": "Bài 5. Phương trình lượng giác cơ bản", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết. Khái niệm phương trình tương đương" },
     { "code": "2", "title": "Điều kiện có nghiệm" },
     { "code": "3", "title": "Phương trình cơ bản dùng Radian" },
     { "code": "4", "title": "Phương trình cơ bản dùng Độ" },
     { "code": "5", "title": "Phương trình đưa về dạng cơ bản" },
     { "code": "6", "title": "Toán thực tế áp dụng phương trình lượng giác" }
    ]},
    { "code": "6", "title": "Bài 6. [Giảm] Phương trình lượng giác thường gặp", "types": [
     { "code": "1", "title": "Phương trình bậc n theo một hàm số lượng giác" },
     { "code": "2", "title": "Phương trình đẳng cấp bậc n đối với sinx và cosx" },
     { "code": "3", "title": "Phương trình bậc nhất đối với sinx và cosx" },
     { "code": "4", "title": "Phương trình đối xứng, phản đối xứng" },
     { "code": "5", "title": "Phương trình lượng giác không mẫu mực" },
     { "code": "6", "title": "Phương trình lượng giác có chứa ẩn ở mẫu số" },
     { "code": "7", "title": "Phương trình lượng giác có chứa tham số" },
     { "code": "8", "title": "Toán thực tế áp dụng phương trình lượng giác thường gặp" }
    ]}
   ]},
   { "code": "2", "title": "Chương 2. Dãy số. Cấp số cộng. Cấp số nhân", "lessons": [
    { "code": "1", "title": "Bài 1. Dãy số", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Số hạng tổng quát, biểu diễn dãy số" },
     { "code": "3", "title": "Tìm số hạng cụ thể của dãy số" },
     { "code": "4", "title": "Dãy số tăng, dãy số giảm" },
     { "code": "5", "title": "Dãy số bị chặn" },
     { "code": "6", "title": "Toán thực tế áp dụng dãy số" }
    ]},
    { "code": "2", "title": "Bài 2. Cấp số cộng", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Nhận diện cấp số cộng, công sai d" },
     { "code": "3", "title": "Số hạng tổng quát của cấp số cộng" },
     { "code": "4", "title": "Tìm số hạng cụ thể trong cấp số cộng" },
     { "code": "5", "title": "Điều kiện để dãy số là cấp số cộng" },
     { "code": "6", "title": "Tính tổng của cấp số cộng" },
     { "code": "7", "title": "Toán thực tế áp dụng cấp số cộng" }
    ]},
    { "code": "3", "title": "Bài 3. Cấp số nhân", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Nhận diện cấp số nhân, công bội q" },
     { "code": "3", "title": "Số hạng tổng quát của cấp số nhân" },
     { "code": "4", "title": "Tìm số hạng cụ thể trong cấp số nhân" },
     { "code": "5", "title": "Điều kiện để dãy số là cấp số nhân" },
     { "code": "6", "title": "Tính tổng của cấp số nhân" },
     { "code": "7", "title": "Kết hợp cấp số nhân và cấp số cộng" },
     { "code": "8", "title": "Toán thực tế áp dụng cấp số nhân" }
    ]}
   ]},
   { "code": "3", "title": "Chương 3. Giới hạn. Hàm số liên tục", "lessons": [
    { "code": "1", "title": "Bài 1. Giới hạn của dãy số", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Phương pháp đặt thừa số chung (lim hữu hạn)" },
     { "code": "3", "title": "Phương pháp lượng liên hợp (lim hữu hạn)" },
     { "code": "4", "title": "Giới hạn vô cực" },
     { "code": "5", "title": "Cấp số nhân lùi vô hạn" },
     { "code": "6", "title": "Toán thực tế áp dụng giới hạn của dãy số" }
    ]},
    { "code": "2", "title": "Bài 2. Giới hạn của hàm số", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Thay số trực tiếp" },
     { "code": "3", "title": "PP đặt thừa số chung, kết quả hữu hạn" },
     { "code": "4", "title": "PP đặt thừa số chung, kết quả vô cực" },
     { "code": "5", "title": "PP lượng liên hợp, kết quả hữu hạn" },
     { "code": "6", "title": "PP lượng liên hợp, kết quả vô cực" },
     { "code": "7", "title": "Giới hạn một bên" },
     { "code": "8", "title": "Toán thực tế áp dụng giới hạn của hàm số" }
    ]},
    { "code": "3", "title": "Bài 3. Hàm số liên tục", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Tính liên tục thể hiện qua đồ thị" },
     { "code": "3", "title": "Hàm số liên tục tại một điểm" },
     { "code": "4", "title": "Hàm số liên tục trên khoảng, đoạn" },
     { "code": "5", "title": "Bài toán phương trình có nghiệm" },
     { "code": "6", "title": "Toán thực tế áp dụng hàm số liên tục" }
    ]}
   ]},
   { "code": "5", "title": "Chương 5. Các số đặc trưng đo xu thế trung tâm cho mẫu số liệu ghép nhóm", "lessons": [
    { "code": "1", "title": "Bài 1. Số trung bình và mốt của mẫu số liệu ghép nhóm", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Mẫu số liệu ghép nhóm" },
     { "code": "3", "title": "Số trung bình" },
     { "code": "4", "title": "Mốt" }
    ]},
    { "code": "2", "title": "Bài 2. Trung vị và tứ phân vị của mẫu số liệu ghép nhóm", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Trung vị" },
     { "code": "3", "title": "Tứ phân vị" }
    ]}
   ]},
   { "code": "6", "title": "Chương 6. Hàm số mũ và hàm số lôgarít", "lessons": [
    { "code": "1", "title": "Bài 1. Phép tính luỹ thừa", "types": [
     { "code": "1", "title": "Tính giá trị của biểu thức chứa lũy thừa" },
     { "code": "2", "title": "Biến đổi, rút gọn biểu thức chứa lũy thừa" },
     { "code": "3", "title": "Điều kiện cho luỹ thừa, căn thức" },
     { "code": "4", "title": "So sánh các lũy thừa" }
    ]},
    { "code": "2", "title": "Bài 2. Phép tính lôgarít", "types": [
     { "code": "1", "title": "Tính giá trị biểu thức chứa lôgarít" },
     { "code": "2", "title": "Biến đổi, biểu diễn biểu thức chứa lôgarít" },
     { "code": "3", "title": "Rút gọn, chứng minh biểu thức lôgarít" },
     { "code": "4", "title": "Số e và bài toán lãi kép" },
     { "code": "5", "title": "Toán thực tế áp dụng phép tính lôgarít" }
    ]},
    { "code": "3", "title": "Bài 3. Hàm số mũ. Hàm số lôgarít", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết hàm số lũy thừa, mũ, lôgarít" },
     { "code": "2", "title": "Tập xác định của hàm số" },
     { "code": "3", "title": "Sự biến thiên và đồ thị của hàm số mũ, lôgarít" },
     { "code": "4", "title": "So sánh các luỹ thừa và lôgarít" },
     { "code": "5", "title": "Toán thực tế áp dụng hàm số mũ, lôgarít" }
    ]},
    { "code": "4", "title": "Bài 4. Phương trình, bất phương trình mũ và lôgarít", "types": [
     { "code": "1", "title": "Điều kiện có nghiệm" },
     { "code": "2", "title": "Phương trình mũ, lôgarít cơ bản" },
     { "code": "3", "title": "Bất phương trình mũ, lôgarít cơ bản" },
     { "code": "4", "title": "Phương trình mũ, lôgarít đưa về cùng cơ số" },
     { "code": "5", "title": "Bất phương trình mũ, lôgarít đưa về cùng cơ số" },
     { "code": "6", "title": "Toán thực tế áp dụng phương trình mũ, lôgarít" }
    ]},
    { "code": "5", "title": "Bài 5. [Giảm] Các phương pháp giải được giảm tải", "types": [
     { "code": "1", "title": "Phương pháp đặt ẩn phụ cho PT mũ, lôgarít" },
     { "code": "2", "title": "Phương pháp lôgarít hóa, mũ cho PT mũ, lôgarít" },
     { "code": "3", "title": "Phương pháp hàm số, đánh giá cho PT mũ, lôgarít" },
     { "code": "4", "title": "Hệ PT mũ, lôgarít" },
     { "code": "5", "title": "Toán thực tế áp dụng phương trình mũ, lôgarít" }
    ]}
   ]},
   { "code": "7", "title": "Chương 7. Đạo hàm", "lessons": [
    { "code": "1", "title": "Bài 1. Đạo hàm", "types": [
     { "code": "1", "title": "Tính đạo hàm bằng định nghĩa" },
     { "code": "2", "title": "Số gia hàm số, số gia biến số" },
     { "code": "3", "title": "Ý nghĩa Hình học của đạo hàm" },
     { "code": "4", "title": "Ý nghĩa Vật lý của đạo hàm" },
     { "code": "5", "title": "Toán thực tế khác áp dụng định nghĩa đạo hàm" }
    ]},
    { "code": "2", "title": "Bài 2. Các quy tắc đạo hàm", "types": [
     { "code": "1", "title": "Tính đạo hàm" },
     { "code": "2", "title": "Đẳng thức có y và y′" },
     { "code": "3", "title": "Tiếp tuyến tại một điểm" },
     { "code": "4", "title": "Tiếp tuyến biết trước hệ số góc" },
     { "code": "5", "title": "Tiếp tuyến chưa biết tiếp điểm và hệ số góc" },
     { "code": "6", "title": "Giới hạn hàm số lượng giác, hàm số mũ, lôgarít" },
     { "code": "7", "title": "Dùng đạo hàm cho nhị thức Newton" },
     { "code": "8", "title": "Toán thực tế áp dụng quy tắc đạo hàm" }
    ]},
    { "code": "3", "title": "Bài 3. Đạo hàm cấp hai", "types": [
     { "code": "1", "title": "Tính đạo hàm cấp hai" },
     { "code": "2", "title": "Đẳng thức có y và (y′, y′′)" },
     { "code": "3", "title": "Toán thực tế và Ý nghĩa Vật lý của đạo hàm cấp hai" }
    ]}
   ]},
   { "code": "9", "title": "Chương 9. Xác suất", "lessons": [
    { "code": "1", "title": "Bài 1. Biến cố giao và quy tắc nhân xác suất", "types": [
     { "code": "1", "title": "Câu hỏi lí thuyết" },
     { "code": "2", "title": "Xác định và đếm số phần tử biến cố giao" },
     { "code": "3", "title": "Công thức nhân xác suất cho 2 biến cố độc lập" },
     { "code": "4", "title": "Tính xác suất biến cố giao bằng sơ đồ hình cây" }
    ]},
    { "code": "2", "title": "Bài 2. Biến cố hợp và quy tắc cộng xác suất", "types": [
     { "code": "1", "title": "Câu hỏi lí thuyết" },
     { "code": "2", "title": "Xác định và đếm số phần tử biến cố hợp" },
     { "code": "3", "title": "Quy tắc cộng cho hai biến cố xung khắc" },
     { "code": "4", "title": "Quy tắc cộng cho hai biến cố bất kì" },
     { "code": "5", "title": "Tính xác suất biến cố hợp bằng sơ đồ hình cây" }
    ]}
   ]}
  ],
  "H": [
   { "code": "4", "title": "Chương 4. Đường thẳng, mặt phẳng. Quan hệ song song trong không gian", "lessons": [
    { "code": "1", "title": "Bài 1. Điểm, đường thẳng và mặt phẳng", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Hình biểu diễn của một hình không gian" },
     { "code": "3", "title": "Tìm giao tuyến của hai mặt phẳng" },
     { "code": "4", "title": "Tìm giao điểm của đường thẳng và mặt phẳng" },
     { "code": "5", "title": "Xác định thiết diện" },
     { "code": "6", "title": "Ba điểm thẳng hàng, ba đường thẳng đồng quy" },
     { "code": "7", "title": "Toán thực tế áp dụng điểm, đường thẳng và mặt phẳng" }
    ]},
    { "code": "2", "title": "Bài 2. Hai đường thẳng song song", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Hai đường thẳng song song" },
     { "code": "3", "title": "Tìm giao tuyến bằng cách kẻ song song" },
     { "code": "4", "title": "Tìm giao điểm của đường thẳng và mặt phẳng" },
     { "code": "5", "title": "Xác định thiết diện bằng cách kẻ song song" },
     { "code": "6", "title": "Ba điểm thẳng hàng" },
     { "code": "7", "title": "Bài toán quỹ tích và điểm cố định" },
     { "code": "8", "title": "Toán thực tế áp dụng hai đường thẳng song song" }
    ]},
    { "code": "3", "title": "Bài 3. Đường thẳng và mặt phẳng song song", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Đường thẳng song song với mặt phẳng" },
     { "code": "3", "title": "Tìm giao tuyến bằng cách kẻ song song" },
     { "code": "4", "title": "Tìm giao điểm của đường thẳng và mặt phẳng" },
     { "code": "5", "title": "Xác định thiết diện bằng cách kẻ song song" },
     { "code": "6", "title": "Ba điểm thẳng hàng" },
     { "code": "7", "title": "Bài toán quỹ tích và điểm cố định" },
     { "code": "8", "title": "Toán thực tế áp dụng đường thẳng song song mặt phẳng" }
    ]},
    { "code": "4", "title": "Bài 4. Hai mặt phẳng song song", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Hai mặt phẳng song song" },
     { "code": "3", "title": "Chứng minh đường thẳng song song mặt phẳng" },
     { "code": "4", "title": "Xác định mặt phẳng đi qua một điểm và song song với một mặt phẳng" },
     { "code": "5", "title": "Xác định mặt phẳng chứa đường thẳng (hoặc đi qua hai điểm) và song song với một mặt phẳng" },
     { "code": "6", "title": "Bài toán tổng hợp" },
     { "code": "7", "title": "Toán thực tế áp dụng hai mặt phẳng song song" }
    ]},
    { "code": "5", "title": "Bài 5. Hình lăng trụ và hình hộp (xiên)", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Bài toán về hình lăng trụ (xiên)" },
     { "code": "3", "title": "Bài toán về hình hộp (xiên)" },
     { "code": "4", "title": "Toán thực tế áp dụng hình lăng trụ và hình hộp" }
    ]},
    { "code": "6", "title": "Bài 6. Phép chiếu song song", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Hình biểu diễn của một hình không gian" },
     { "code": "3", "title": "Xác định yếu tố song song" },
     { "code": "4", "title": "Xác định phương chiếu" },
     { "code": "5", "title": "Tính tỉ số đoạn thẳng, diện tích qua phép chiếu" }
    ]}
   ]},
   { "code": "8", "title": "Chương 8. Quan hệ vuông góc trong không gian", "lessons": [
    { "code": "1", "title": "Bài 1. Hai đường thẳng vuông góc", "types": [
     { "code": "1", "title": "Câu hỏi lí thuyết" },
     { "code": "2", "title": "Xác định hai đường thẳng vuông góc" },
     { "code": "3", "title": "Tìm góc giữa hai đường thẳng" },
     { "code": "4", "title": "Toán thực tế áp dụng hai đường thẳng vuông góc" }
    ]},
    { "code": "2", "title": "Bài 2. Đường thẳng vuông góc với mặt phẳng", "types": [
     { "code": "1", "title": "Câu hỏi lí thuyết" },
     { "code": "2", "title": "Xác định hoặc chứng minh đường thẳng và mặt phẳng vuông góc" },
     { "code": "3", "title": "Xác định hoặc chứng minh hai đường thẳng vuông góc" },
     { "code": "4", "title": "Dựng mặt phẳng, tìm thiết diện" },
     { "code": "5", "title": "Hình chiếu vuông góc của một hình trên mặt phẳng (tìm điểm, tìm đoạn thẳng, tính diện tích)" },
     { "code": "6", "title": "Toán thực tế áp dụng đường thẳng vuông góc mặt phẳng" }
    ]},
    { "code": "3", "title": "Bài 3. Phép chiếu vuông góc", "types": [
     { "code": "1", "title": "Lý thuyết về phép chiếu vuông góc" },
     { "code": "2", "title": "Hình chiếu vuông góc của đa giác trên mặt phẳng" },
     { "code": "3", "title": "Các bài toán thực tế áp dụng phép chiếu vuông góc" }
    ]},
    { "code": "4", "title": "Bài 4. Hai mặt phẳng vuông góc", "types": [
     { "code": "1", "title": "Câu hỏi lí thuyết" },
     { "code": "2", "title": "Xác định/chứng minh đường thẳng vuông góc mặt phẳng, mặt phẳng vuông góc" },
     { "code": "3", "title": "Xác định góc giữa hai mặt phẳng" },
     { "code": "4", "title": "Dựng mặt phẳng, thiết diện" },
     { "code": "5", "title": "Nhận dạng và tính toán liên quan các hình thông dụng" },
     { "code": "6", "title": "Bài toán cho trước góc giữa d và (P)" },
     { "code": "7", "title": "Toán thực tế áp dụng hai mặt phẳng vuông góc" }
    ]},
    { "code": "5", "title": "Bài 5. Khoảng cách", "types": [
     { "code": "1", "title": "Câu hỏi lí thuyết" },
     { "code": "2", "title": "Khoảng cách giữa 2 điểm, từ 1 điểm đến 1 đường thẳng" },
     { "code": "3", "title": "Khoảng cách từ một điểm đến một mặt phẳng" },
     { "code": "4", "title": "Khoảng cách giữa hai đường thẳng chéo nhau" },
     { "code": "5", "title": "Đường vuông góc chung của hai đường thẳng chéo nhau" },
     { "code": "6", "title": "Toán thực tế áp dụng khoảng cách" }
    ]},
    { "code": "6", "title": "Bài 6. Góc giữa đường thẳng và mặt phẳng. Góc nhị diện", "types": [
     { "code": "1", "title": "Góc giữa đường thẳng và mặt phẳng" },
     { "code": "2", "title": "Góc nhị diện, góc phẳng nhị diện" },
     { "code": "3", "title": "Góc giữa 2 mặt phẳng, biết trước góc (d,(P))" },
     { "code": "4", "title": "Khoảng cách giữa điểm, đường, biết trước góc (d,(P))" },
     { "code": "5", "title": "Khoảng cách giữa điểm - mặt phẳng, biết trước góc (d,(P))" },
     { "code": "6", "title": "Khoảng cách giữa 2 đường chéo nhau, biết trước góc (d,(P))" },
     { "code": "7", "title": "Toán thực tế về góc đường thẳng, mặt phẳng, góc nhị diện" }
    ]},
    { "code": "7", "title": "Bài 7. Hình lăng trụ đứng. Hình chóp đều. Thể tích", "types": [
     { "code": "1", "title": "Câu hỏi lí thuyết, công thức" },
     { "code": "2", "title": "Thể tích khối chóp tam giác" },
     { "code": "3", "title": "Thể tích khối chóp tứ giác" },
     { "code": "4", "title": "Thể tích khối lăng trụ tam giác" },
     { "code": "5", "title": "Thể tích khối lăng trụ tứ giác" },
     { "code": "6", "title": "Thể tích khối chóp cụt và các khối khác" },
     { "code": "7", "title": "Tỉ số thể tích" },
     { "code": "8", "title": "Ứng dụng thể tích tính góc, khoảng cách,. . ." },
     { "code": "9", "title": "Toán thực tế hình lăng trụ đứng, chóp đều, thể tích" }
    ]}
   ]}
  ],
  "C": [
   { "code": "1", "title": "Chuyên đề 1. Phép biến hình phẳng", "lessons": [
    { "code": "1", "title": "Bài 1. Phép biến hình, phép dời hình và hai hình bằng nhau", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Bài toán xác định một phép đặt tương ứng có là phép dời hình hay không?" },
     { "code": "3", "title": "Xác định ảnh khi thực hiện phép dời hình" }
    ]},
    { "code": "2", "title": "Bài 2. Phép tịnh tiến", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Tìm ảnh hoặc tạo ảnh khi thực hiện phép tịnh tiến" },
     { "code": "3", "title": "Ứng dụng phép tịnh tiến" }
    ]},
    { "code": "3", "title": "Bài 3. Phép đối xứng trục", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Tìm ảnh hoặc tạo ảnh khi thực hiện phép đối xứng trục" },
     { "code": "3", "title": "Xác định trục đối xứng và số trục đối xứng của một hình" },
     { "code": "4", "title": "Ứng dụng phép đối xứng trục" }
    ]},
    { "code": "4", "title": "Bài 4. Phép đối xứng tâm", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Tìm ảnh, tạo ảnh khi thực hiện phép đối xứng tâm" },
     { "code": "3", "title": "Xác định hình có tâm đối xứng" },
     { "code": "4", "title": "Ứng dụng phép đối xứng tâm" }
    ]},
    { "code": "5", "title": "Bài 5. Phép quay", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Xác định vị trí ảnh của điểm, hình khi thực hiện phép quay cho trước" },
     { "code": "3", "title": "Tìm tọa độ ảnh của điểm, phương trình của một đường thẳng khi thực hiện phép quay" },
     { "code": "4", "title": "Ứng dụng phép quay" }
    ]},
    { "code": "6", "title": "Bài 6. Phép vị tự", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Xác định ảnh, tạo ảnh khi thực hiện phép vị tự" },
     { "code": "3", "title": "Tìm tâm vị tự của hai đường tròn" },
     { "code": "4", "title": "Ứng dụng phép vị tự" }
    ]},
    { "code": "7", "title": "Bài 7. Phép đồng dạng", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Xác định ảnh, tạo ảnh khi thực hiện phép đồng dạng" }
    ]}
   ]},
   { "code": "2", "title": "Chuyên đề 2. Lý thuyết đồ thị", "lessons": [
    { "code": "1", "title": "Bài 1. Đồ thị", "types": [
     { "code": "1", "title": "Câu hỏi về đỉnh, cạnh của đồ thị" },
     { "code": "2", "title": "Câu hỏi về bậc của đồ thị" },
     { "code": "3", "title": "Câu hỏi tổng hợp" }
    ]},
    { "code": "2", "title": "Bài 2. Đường đi Euler và Harmilton", "types": [
     { "code": "1", "title": "Đường đi Euler" },
     { "code": "2", "title": "Đường đi Harmilton" },
     { "code": "3", "title": "Câu hỏi tổng hợp" }
    ]},
    { "code": "3", "title": "Bài 3. Bài toán tìm đường đi ngắn nhất", "types": [
     { "code": "1", "title": "Bài toán tìm đường đi ngắn nhất" },
     { "code": "2", "title": "Tổng hợp" }
    ]}
   ]},
   { "code": "3", "title": "Chuyên đề 3. Một số yếu tố vẽ kỹ thuật", "lessons": [
    { "code": "1", "title": "Bài 1. Hình biểu diễn của một hình, khối", "types": [
     { "code": "1", "title": "Lý thuyết về phép chiếu và hình biểu diễn song song" },
     { "code": "2", "title": "Lý thuyết về phép chiếu vuông góc" },
     { "code": "3", "title": "Lý thuyết về phép chiếu trục đo" },
     { "code": "4", "title": "Tổng hợp" }
    ]},
    { "code": "2", "title": "Bài 2. Bản vẽ kỹ thuật", "types": [
     { "code": "1", "title": "Lý thuyết cơ bản về bản vẽ kỹ thuật" },
     { "code": "2", "title": "Phương pháp biểu diễn bản vẽ kỹ thuật" },
     { "code": "3", "title": "Tổng hợp" }
    ]}
   ]}
  ]
 },
 "2": { "code": "2", "title": "Lớp 12",
  "D": [
   { "code": "1", "title": "Chương 1. Ứng dụng đạo hàm để khảo sát hàm số", "lessons": [
    { "code": "1", "title": "Bài 1. Sự đồng biến và nghịch biến của hàm số", "types": [
     { "code": "1", "title": "Xét tính đơn điệu của hàm số cho bởi công thức" },
     { "code": "2", "title": "Xét tính đơn điệu dựa vào bảng biến thiên, đồ thị" },
     { "code": "3", "title": "Tìm tham số m để hàm số đơn điệu" },
     { "code": "4", "title": "Ứng dụng tính đơn điệu để chứng minh bất đẳng thức, giải phương trình, bất phương trình, hệ phương trình" },
     { "code": "5", "title": "Toán thực tế ứng dụng sự đồng biến nghịch biến" }
    ]},
    { "code": "2", "title": "Bài 2. Cực trị của hàm số", "types": [
     { "code": "1", "title": "Tìm cực trị của hàm số cho bởi công thức" },
     { "code": "2", "title": "Tìm cực trị dựa vào BBT, đồ thị" },
     { "code": "3", "title": "Tìm m để hàm số đạt cực trị tại 1 điểm x0 cho trước" },
     { "code": "4", "title": "Tìm m để hàm số, đồ thị hàm số bậc ba có cực trị thỏa mãn điều kiện" },
     { "code": "5", "title": "Tìm m để hàm số, đồ thị hàm số trùng phương có cực trị thỏa mãn điều kiện" },
     { "code": "6", "title": "Tìm m để hàm số, đồ thị hàm số các hàm số khác có cực trị thỏa mãn điều kiện" },
     { "code": "7", "title": "Toán thực tế ứng dụng cực trị của hàm số" }
    ]},
    { "code": "3", "title": "Bài 3. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số", "types": [
     { "code": "1", "title": "GTLN, GTNN trên đoạn [a; b]" },
     { "code": "2", "title": "GTLN, GTNN trên khoảng" },
     { "code": "3", "title": "Sử dụng các đánh giá, bất đẳng thức cổ điển" },
     { "code": "4", "title": "Ứng dụng GTNN, GTLN trong bài toán phương trình, bất phương trình, hệ phương trình" },
     { "code": "5", "title": "GTLN, GTNN hàm nhiều biến" },
     { "code": "6", "title": "Toán thực tế ứng dụng GTLN, GTNN của hàm số" }
    ]},
    { "code": "4", "title": "Bài 4. Đường tiệm cận", "types": [
     { "code": "1", "title": "Bài toán xác định các đường tiệm cận của hàm số (không chứa tham số) hoặc biết BBT, đồ thị" },
     { "code": "2", "title": "Bài toán xác định các đường tiệm cận của hàm số có chứa tham số" },
     { "code": "3", "title": "Bài toán liên quan đến đồ thị hàm số và các đường tiệm cận" },
     { "code": "4", "title": "Toán thực tế ứng dụng tiệm cận" }
    ]},
    { "code": "5", "title": "Bài 5. Khảo sát sự biến thiên và vẽ đồ thị hàm số", "types": [
     { "code": "1", "title": "Nhận dạng đồ thị" },
     { "code": "2", "title": "Các phép biến đổi đồ thị" },
     { "code": "3", "title": "Biện luận số giao điểm dựa vào đồ thị, bảng biến thiên" },
     { "code": "4", "title": "Sự tương giao của hai đồ thị (liên quan đến tọa độ giao điểm)" },
     { "code": "5", "title": "Đồ thị của hàm đạo hàm" },
     { "code": "6", "title": "Phương trình tiếp tuyến của đồ thị hàm số" },
     { "code": "7", "title": "Điểm đặc biệt của đồ thị hàm số" },
     { "code": "8", "title": "Toán thực tế ứng dụng khảo sát hàm số" }
    ]}
   ]},
   { "code": "3", "title": "Chương 3. Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm", "lessons": [
    { "code": "1", "title": "Bài 1. Khoảng biến thiên, khoảng tứ phân vị của mẫu số liệu ghép nhóm", "types": [
     { "code": "1", "title": "Công thức lý thuyết" },
     { "code": "2", "title": "Tìm khoảng biến thiên" },
     { "code": "3", "title": "Tìm khoảng tứ phân vị" },
     { "code": "4", "title": "Câu hỏi tổng hợp" }
    ]},
    { "code": "2", "title": "Bài 2. Phương sai, độ lệch chuẩn của mẫu số liệu ghép nhóm", "types": [
     { "code": "1", "title": "Công thức lý thuyết" },
     { "code": "2", "title": "Tìm phương sai, độ lệch chuẩn" },
     { "code": "3", "title": "Câu hỏi tổng hợp" }
    ]}
   ]},
   { "code": "4", "title": "Chương 4. Nguyên hàm, tích phân và ứng dụng", "lessons": [
    { "code": "1", "title": "Bài 1. Nguyên hàm", "types": [
     { "code": "1", "title": "Công thức lý thuyết" },
     { "code": "2", "title": "Nguyên hàm cơ bản đa thức, phân thức" },
     { "code": "3", "title": "Nguyên hàm cơ bản hàm lượng giác" },
     { "code": "4", "title": "Nguyên hàm cơ bản hàm mũ, luỹ thừa" },
     { "code": "5", "title": "Phương pháp đổi biến số cơ bản" },
     { "code": "6", "title": "Toán thực tế áp dụng nguyên hàm" }
    ]},
    { "code": "2", "title": "Bài 2. Tích phân", "types": [
     { "code": "1", "title": "Công thức lý thuyết" },
     { "code": "2", "title": "Tích phân cơ bản đa thức, phân thức" },
     { "code": "3", "title": "Tích phân cơ bản hàm lượng giác" },
     { "code": "4", "title": "Tích phân cơ bản hàm mũ, luỹ thừa" },
     { "code": "5", "title": "Phương pháp đổi biến số cơ bản" },
     { "code": "6", "title": "Toán thực tế áp dụng nguyên hàm" }
    ]},
    { "code": "3", "title": "Bài 3. Ứng dụng thực tế và hình học của tích phân", "types": [
     { "code": "1", "title": "Diện tích hình phẳng được giới hạn bởi các đồ thị" },
     { "code": "2", "title": "Bài toán thực tế sử dụng diện tích hình phẳng" },
     { "code": "3", "title": "Thể tích giới hạn bởi các đồ thị (tròn xoay)" },
     { "code": "4", "title": "Thể tích tính theo mặt cắt S(x)" },
     { "code": "5", "title": "Bài toán thực tế và ứng dụng thể tích tròn xoay, S(x)" }
    ]}
   ]},
   { "code": "6", "title": "Chương 6. Một số yếu tố xác suất", "lessons": [
    { "code": "1", "title": "Bài 1. Xác suất có điều kiện", "types": [
     { "code": "1", "title": "Công thức lý thuyết" },
     { "code": "2", "title": "Tính xác suất có điều kiện bằng công thức" },
     { "code": "3", "title": "Tính xác suất có điều kiện bằng sơ đồ cây" },
     { "code": "4", "title": "Bài toán tổng hợp" }
    ]},
    { "code": "2", "title": "Bài 2. Công thức xác suất toàn phần. Công thức Bayes", "types": [
     { "code": "1", "title": "Công thức lý thuyết" },
     { "code": "2", "title": "Tính xác suất bằng công thức xác suất toàn phần" },
     { "code": "3", "title": "Tính xác suất bằng công thức xác suất Bayes" },
     { "code": "4", "title": "Bài toán tổng hợp" }
    ]}
   ]}
  ],
  "H": [
   { "code": "2", "title": "Chương 2. Tọa độ của véc-tơ trong không gian", "lessons": [
    { "code": "1", "title": "Bài 1. Véc-tơ và các phép toán véc-tơ trong không gian (chưa toạ độ hoá)", "types": [
     { "code": "1", "title": "Công thức lý thuyết" },
     { "code": "2", "title": "Tổng, hiệu, tích một số với véc-tơ" },
     { "code": "3", "title": "Tích vô hướng và ứng dụng" },
     { "code": "4", "title": "Toán thực tế áp dụng các phép toán véc-tơ" }
    ]},
    { "code": "2", "title": "Bài 2. Toạ độ của véc-tơ và các công thức", "types": [
     { "code": "1", "title": "Công thức lý thuyết" },
     { "code": "2", "title": "Tìm tọa độ điểm" },
     { "code": "3", "title": "Tìm tọa độ véc-tơ" },
     { "code": "4", "title": "Công thức toạ độ của tích vô hướng và ứng dụng" },
     { "code": "5", "title": "Công thức toạ độ của tích có hướng và ứng dụng" },
     { "code": "6", "title": "Toán thực tế áp dụng các phép toán toạ độ hoá véc-tơ" }
    ]}
   ]},
   { "code": "5", "title": "Chương 5. Phương trình mặt phẳng, đường thẳng, mặt cầu trong không gian Oxyz", "lessons": [
    { "code": "1", "title": "Bài 1. Phương trình mặt phẳng", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Xác định véc-tơ pháp tuyến, cặp véc-tơ chỉ phương" },
     { "code": "3", "title": "Viết phương trình tổng quát mặt phẳng" },
     { "code": "4", "title": "Vị trí tương đối giữa hai mặt phẳng (song song, vuông góc)" },
     { "code": "5", "title": "Khoảng cách điểm tới mặt phẳng" },
     { "code": "6", "title": "Góc giữa hai mặt phẳng" },
     { "code": "7", "title": "Toán thực tế áp dụng phương trình mặt phẳng" }
    ]},
    { "code": "2", "title": "Bài 2. Phương trình đường thẳng trong không gian", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Xác định véc-tơ chỉ phương, cặp véc-tơ pháp tuyến" },
     { "code": "3", "title": "Viết phương trình tổng quát, chính tắc, tham số đường thẳng" },
     { "code": "4", "title": "Vị trí tương đối giữa hai đường thẳng" },
     { "code": "5", "title": "Vị trí tương đối giữa đường thẳng và mặt phẳng" },
     { "code": "6", "title": "Khoảng cách điểm tới đường thẳng" },
     { "code": "7", "title": "Góc giữa hai đường thẳng, đường thẳng và mặt phẳng" },
     { "code": "8", "title": "Toán thực tế áp dụng phương trình đường thẳng" }
    ]},
    { "code": "3", "title": "Bài 3. Phương trình mặt cầu trong không gian", "types": [
     { "code": "1", "title": "Câu hỏi lý thuyết" },
     { "code": "2", "title": "Xác định tâm, bán kính, đường kính mặt cầu" },
     { "code": "3", "title": "Viết phương trình tổng quát mặt cầu" },
     { "code": "4", "title": "Toán thực tế áp dụng phương trình mặt cầu" }
    ]}
   ]}
  ]
 }
};

/**
 * Tên đầy đủ của các nhánh 10–12, khớp với mã D/H/C trong CURRICULUM_DATA.
 * Đây là nhãn tham khảo; không chèn nhánh này vào mã lớp 6–9.
 */
export const CURRICULUM_BRANCH_TITLES: Record<string, Record<string, string>> = {
 "0": {"D": "Đại số / Xác suất - Thống kê / Tổ hợp", "H": "Hình học & đo lường", "C": "Chuyên đề"},
 "1": {"D": "Đại số / Xác suất - Thống kê / Tổ hợp", "H": "Hình học & đo lường", "C": "Chuyên đề"},
 "2": {"D": "Đại số / Xác suất - Thống kê / Tổ hợp", "H": "Hình học & đo lường"}
};

/**
 * Metadata đối chiếu từ taxonomy.json; dữ liệu gốc được giữ nguyên ở cấp giá trị,
 * không dùng metadata như lệnh tự động nới lỏng khuôn mã chuẩn.
 */
export const TAXONOMY_METADATA = {
 "_chuThich": "BẢN CHÉP của cây mục lục nằm trong file ngân hàng (bảng taxonomy_nodes + difficulty_levels + meta). Nguồn chân lý là file ngân hàng, KHÔNG phải file này: app tự ghi lại đây sau mỗi lần sửa cây, sửa tay vào đây không có tác dụng, xoá đi cũng không mất gì. Nó tồn tại để đọc bằng mắt và để mang bộ mục lục sang ngân hàng khác bằng nút \"Nạp cây mục lục…\".",
 "format": {
    "separator": "",
    "open": "[",
    "close": "]",
    "levelOpen": "",
    "levelClose": "",
    "readSeparators": "-_*.·/|,;:+ ()",
    "readWrappers": [
      [
        "[",
        "]"
      ],
      [
        "(",
        ")"
      ],
      [
        "<",
        ">"
      ],
      [
        "{",
        "}"
      ]
    ],
    "levelSeparators": [
      "",
      "",
      "",
      "-"
    ],
    "difficultyAfterLevel": 3,
    "readMode": "strict",
    "requireLeaf": true,
    "requireDifficulty": true
  },
 "levels": [
    {
      "code": "N",
      "name": "Nhận biết",
      "ord": 0
    },
    {
      "code": "H",
      "name": "Thông hiểu",
      "ord": 1
    },
    {
      "code": "V",
      "name": "Vận dụng",
      "ord": 2
    },
    {
      "code": "C",
      "name": "Vận dụng cao",
      "ord": 3
    }
  ],
 "branchFormats": {
    "6": {
      "separator": "-",
      "open": "[",
      "close": "]",
      "levelOpen": "(",
      "levelClose": ")",
      "readSeparators": "-_*.·/|,;:+ ()",
      "readWrappers": [
        [
          "[",
          "]"
        ],
        [
          "(",
          ")"
        ],
        [
          "<",
          ">"
        ],
        [
          "{",
          "}"
        ]
      ]
    },
    "7": {
      "separator": "-",
      "open": "[",
      "close": "]",
      "levelOpen": "(",
      "levelClose": ")",
      "readSeparators": "-_*.·/|,;:+ ()",
      "readWrappers": [
        [
          "[",
          "]"
        ],
        [
          "(",
          ")"
        ],
        [
          "<",
          ">"
        ],
        [
          "{",
          "}"
        ]
      ]
    },
    "8": {
      "separator": "-",
      "open": "[",
      "close": "]",
      "levelOpen": "(",
      "levelClose": ")",
      "readSeparators": "-_*.·/|,;:+ ()",
      "readWrappers": [
        [
          "[",
          "]"
        ],
        [
          "(",
          ")"
        ],
        [
          "<",
          ">"
        ],
        [
          "{",
          "}"
        ]
      ]
    },
    "9": {
      "separator": "-",
      "open": "[",
      "close": "]",
      "levelOpen": "(",
      "levelClose": ")",
      "readSeparators": "-_*.·/|,;:+ ()",
      "readWrappers": [
        [
          "[",
          "]"
        ],
        [
          "(",
          ")"
        ],
        [
          "<",
          ">"
        ],
        [
          "{",
          "}"
        ]
      ]
    }
  }
};
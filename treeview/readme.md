# Bài 1: Liệt kê thư mục và file

## Yêu cầu bài toán:
Trong Linux có một ứng dụng nổi tiếng có tên là tree để liệt kê toàn bộ thư mục và thư mục con + file
```
$ tree .
.
├── ReadMe.md
└── folderA
    ├── demo.cs
    ├── folderAA
    │   └── file.cs
    └── util.cs
```
Hãy viết một ứng dụng bằng C# nhận vào tham số là đường dẫn thư mục sau đó liệt kê toàn bộ nội dung thư mục đó.
Chú ý nếu tham số là
- . liệt kê thư mục hiện thời
- .. liệt kê thư mục cha
- ~ liệt kê thư mục người dùng 

##Cách chạy ứng dụng
- Trong cửa số console gõ "dotnet run".
- Nhập vào đường dẫn thư mục cần hiển thị, nhấn enter.

##Mô tả kiến trúc ứng dụng 
- Ứng dụng chạy với 1 hàm treeview( string dir, string padding) với 2 tham số đầu vào dir là thư mục cần xem và padding là phần cách lề của thư mục dir
- Cấu trúc hàm treeview :
	treeview(dir,padding){
	-get tất cả các thư mục dưới dir 1 cấp ();
	-get tất cả các file dưới dir 1 cấp();
	-vẽ các thư mục vừa lấy được trên console = console.WriteLine ( phần cách lề của thư mục cha (tham số padding ) + vẽ phần lùi vào |___ nếu là thư mục cuối cùng hoặc |--- + tên thư mục);
	-với mỗi thư mục vừa get được ta lại chạy hàm treeview với thư mục đó: treeview(thư mục con, padding thư mục cha (dir) + padding cho thư mục hiện tại);
	-vẽ các file vừa lấy được tương tự vẽ folder();
	}

	
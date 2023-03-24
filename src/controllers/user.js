import axios from "axios";


  export const getAll = async(req,res)=>{
    try {
        const {data: users} = await axios.get(
            "http://localhost:3001/users"
        )
        if(users.length ===0){
            res.send ({
                tb:"Danh sach trong"
            })
        }
        return res.status(500).json(users)
    } catch (err) {
        res.status(500).json({tb: err})
    }
} ;

export const getDetailUser = async (req,res)=>{
    try {
        const {data : user} = await axios.get(`http://localhost:3001/users/${req.params.id}`)
        if(!user){
            res.send({
                tb : "NO PRODUCTS"
            });
        }
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({tb:error})
    }
};

export const addUser = async(req,res) =>{
    try {
        const{data:user} = await axios.post(`http://localhost:3001/users`,req.body);
        if(!user){
            res.send({
                tb: "Them San Pham Khong Thanh Cong"
            })
        }
        return res.json(user)
    } catch (error) {
        res.status(500).json({tb:error})
    }
}

export const updateUser = async(req,res) =>{
    try {
        const { data: user } = await axios.put(
          `http://localhost:3001/users/${req.params.id}`,
          req.body
        );
        if (!user) {
          res.send({
            messenger: "Update sản phẩm không thành công",
          });
        }
        return res.status(200).json(user);
      } catch (err) {
        res.status(500).json({ messenger: err });
      }
}

export const removeUser = async (req,res)=>{
    try {
        await axios.delete(`http://localhost:3001/users/${req.params.id}`);
        return res.status(200).json({
          message: "Sản phẩm đã được xóa thành công",
        });
      } catch (error) {
        return res.status(500).json({
          message: error,
        });
      }
};



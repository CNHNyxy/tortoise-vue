<template>
    <div>
        <el-container  style="height: 200px; border: 1px solid #eee">
            <el-main>
                <el-form :model="selectData" ref="form">
                    <el-row :gutter="20">
                        <el-col :span="5">
                            <el-form-item label="资产分类">
                            <el-select v-model="selectData.CategoryID" placeholder="请选择">
                                <el-option
                                    v-for="item in CategoryData"
                                    :key="item.categoryID"
                                    :label="item.categoryName"
                                    :value="item.categoryID">
                                </el-option>
                            </el-select>
                             </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="间隔时间1">
                                <el-date-picker
                                v-model="selectData.date"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item>
                                <el-button type="primary" @click="submitInput">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-main>
        </el-container>
        <el-container style="border: 1px solid #eee">
            <el-main>
                <el-row>
                    <el-col :span="24">
                        <el-button size="small" @click="windos.addWindos = true">新增</el-button>
                    </el-col>
                </el-row>
                <el-row>
                        <el-col :span="24">
                            <el-table :data="tableData" border style="width: 100%" max-height="1000">
                                <el-table-column type="selection" width="55"></el-table-column>
                                <el-table-column fixed prop="create_time" label="购买日期" width="200"></el-table-column>
                                <!-- <el-table-column  prop="UserName" label="用户" width="150"></el-table-column> -->
                                <el-table-column  prop="categoryName" label="资产分类名称" width="200"></el-table-column>
                                <el-table-column  prop="assetName" label="资产名称" width="200"></el-table-column>
                                <el-table-column  prop="currency" label="货币类型" width="200"></el-table-column>
                                <!-- <el-table-column  prop="AssetType" label="资产类型" width="150"></el-table-column> -->
                                <el-table-column sortable prop="marketValue" label="市值" width="200"></el-table-column>
                                <el-table-column sortable prop="amount" label="资产金额" width="200"></el-table-column>
                                <el-table-column sortable prop="cost" label="成本" width="200"></el-table-column>
                                <el-table-column sortable prop="profit" label="收益" width="200"></el-table-column>
                                <el-table-column fixed="right" label="操作" width="100">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small" @click="tableHandle(scope.$index, scope.row,0)">编辑</el-button>
                                        <el-button type="text" size="small" @click="tableHandle(scope.$index, scope.row,1)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                </el-main>
        </el-container>
        <el-dialog
            title="新增"
            :visible.sync="windos.addWindos"
            width="80%"
            center
            :before-close="addClose">
            <span>
                <el-form :model="installDate" ref="installDate" :rules="rules">
                    <el-row :gutter="20" class="er" >
                        <el-col :span="11" :offset="1">
                            <el-form-item label="资产名称" prop="AssetName">
                                <el-input v-model="installDate.AssetName" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="资产分类" prop="CategoryID">
                                <el-select v-model="installDate.CategoryID" style="width: 100%;" filterable placeholder="请选择">
                                <el-option 
                                    
                                    v-for="item in CategoryData"
                                    :key="item.categoryID"
                                    :label="item.categoryName"
                                    :value="item.categoryID"
                                    >
                                </el-option>
                            </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="er" >
                        <el-col :span="11" :offset="1">
                            <el-form-item label="货币类型" prop="Currency">
                                <el-input v-model="installDate.Currency" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="成本" prop="Cost">
                                <el-input v-model="installDate.Cost" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="er" >
                        <el-col :span="11" :offset="1">
                            <el-form-item label="市值" prop="MarketValue">
                                <el-input v-model="installDate.MarketValue" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="收益" prop="Profit">
                                <el-input v-model="installDate.Profit" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="er">
                        <el-col :span="11" :offset="1">
                            <el-form-item label="资产金额" prop="Amount2">
                                <el-input v-model="installDate.Amount" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addClose(1)">取 消</el-button>
                <el-button type="primary" @click="tableAdd(installDate,'installDate')">新增</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="编辑"
            :visible.sync="windos.editWindos"
            width="30%"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="windos.editWindos = false">取 消</el-button>
                <el-button type="primary" @click="tableHandle(0,editData,2)">修改提交</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style>

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.er {
    margin-bottom: 10px;
    
  }

.grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple {
    background: #d3dce6;
  }

</style>

<script>
import { getAssetsList,getAssetCategoryList,getAddAsset } from '@/api/asset'
export default {
    created: function(){
        console.log(11111)
        getAssetCategoryList().then(response=>{
            console.log(response)
            console.log(this.CategoryData)
            this.CategoryData = response.msg
            console.log(this.CategoryData)
        })
    },
    methods: {
        tableAdd(addData,tableName){
            console.log(addData)
            this.$refs[tableName].validate((valid) => {
                if (valid) {
                    getAddAsset(addData).then(rep=>{
                        console.log(rep)
                        this.windos.addWindos = false
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });  
        },
        tableHandle(index,row,flag) {
            if(flag == 1){
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            }else{
                if(flag == 0){
                    this.windos.editWindos = true;
                }else if(flag == 2){
                    console.log(this.editData);
                    this.windos.editWindos = false;
                    this.$message({
                        type: 'success',
                        message: '修改成功!'
                    });
                }
                
            }
        },
        submitInput(){
            console.log(this.selectData)
            console.log(this.tableData)
            getAssetsList(this.selectData).then(response => {
                console.log(response)
                this.tableData = response.msg
            })
        },
        addClose(done){
            var obj = this.installDate
            for (var key in obj) {
                obj[key] = '';
            }
            console.log(this.installDate)
            if(done != 1){
                done()
            }else{
                this.windos.addWindos = false
            }
            
        }
    },
    data() {
        return {
            rules:{
                AssetName: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ]
            },
            windos:{
                addWindos:false,
                editWindos:false
            },
            editData:{

            },
            selectData:{
                UserID: 1,
                CategoryID: 1,
                date: ''
            },
            installDate:{
                UserID: 1,
                AssetName:'',
                CategoryID:'',
                Amount:'',
                Currency:'',
                MarketValue:'',
                Cost:'',
                Profit:''
            },
            tableData: [],
            CategoryData:[]
        }
    }
}
</script>

  
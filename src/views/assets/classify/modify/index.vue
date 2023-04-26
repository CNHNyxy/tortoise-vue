<template>
    <div>
        <el-container  style="height: 200px; border: 1px solid #eee">
            <el-main>
                <el-form :model="selectData" ref="form">
                    <el-row :gutter="20">
                        <el-col :span="5">
                            <el-form-item label="资产分类">
<<<<<<< HEAD
                                <el-select v-model="selectData.categoryId" placeholder="请选择">
                                    <el-option
                                        v-for="item in CategoryData"
                                        :key="item.categoryId"
                                        :label="item.categoryName"
                                        :value="item.categoryId">
=======
                                <el-select v-model="selectData.CategoryID" placeholder="请选择">
                                    <el-option
                                    v-for="item in CategoryData"
                                    :key="item.categoryId"
                                    :label="item.categoryName"
                                    :value="item.categoryId">
>>>>>>> 39f069fb42d3a3a2a2c649dc09c9a61e547343b7
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
                        <el-button size="small" @click="openAddWindos">新增</el-button>
                    </el-col>
                </el-row>
                <el-row>
                        <el-col :span="24">
                            <el-table :data="tableData" border style="width: 100%" max-height="1000">
                                <el-table-column type="selection" width="55"></el-table-column>
                                <el-table-column fixed prop="createTime" label="购买日期" width="200"></el-table-column>
                                <!-- <el-table-column  prop="UserName" label="用户" width="150"></el-table-column> -->
                                <el-table-column  prop="categoryName" label="资产分类名称" width="200"></el-table-column>
                                <el-table-column  prop="assetName" label="资产名称" width="200"></el-table-column>
                                <el-table-column  prop="currencyName" label="货币类型" width="200"></el-table-column>
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
                            <el-form-item label="资产名称" prop="assetName">
                                <el-input v-model="installDate.assetName" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="资产分类" prop="categoryId">
<<<<<<< HEAD
                                <el-select v-model="installDate.categoryId" style="width: 100%;" filterable placeholder="请选择">
                                <el-option 
                                    v-for="item in CategoryData"
                                    :key="item.categoryId"
                                    :label="item.categoryName"
                                    :value="item.categoryId"
                                    >
                                </el-option>
                            </el-select>
=======
                                <el-select v-model="installDate.categoryId" placeholder="请选择">
                                    <el-option
                                    v-for="item in CategoryData"
                                    :key="item.categoryId"
                                    :label="item.categoryName"
                                    :value="item.categoryId">
                                    </el-option>
                                </el-select>
>>>>>>> 39f069fb42d3a3a2a2c649dc09c9a61e547343b7
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="er" >
                        <el-col :span="11" :offset="1">
<<<<<<< HEAD
                            <el-form-item label="货币类型" prop="currencyId">
                                <el-select v-model="installDate.currencyId" style="width: 100%;" filterable placeholder="请选择">
                                <el-option 
                                    v-for="item in CurrencyDate"
                                    :key="item.currencyId"
                                    :label="item.currencyName"
                                    :value="item.currencyId"
                                    >
                                </el-option>
                            </el-select>
=======
                            <el-form-item label="货币类型" prop="currency">
                                <el-input v-model="installDate.currency" placeholder="请输入内容"></el-input>
>>>>>>> 39f069fb42d3a3a2a2c649dc09c9a61e547343b7
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="成本" prop="cost">
                                <el-input v-model="installDate.cost" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="er" >
                        <el-col :span="11" :offset="1">
                            <el-form-item label="市值" prop="marketValue">
                                <el-input v-model="installDate.marketValue" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="收益" prop="profit">
                                <el-input v-model="installDate.profit" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="er">
                        <el-col :span="11" :offset="1">
                            <el-form-item label="资产金额" prop="amount">
                                <el-input v-model="installDate.amount" placeholder="请输入内容"></el-input>
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
            width="80%"
            >
            <span>
                <el-form :model="editData" ref="editData" :rules="rules">
                    <el-row :gutter="20" class="er" >
                        <el-col :span="11" :offset="1">
                            <el-form-item label="资产名称" prop="assetName">
                                <el-input v-model="editData.assetName" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="资产分类" prop="categoryId">
                                <el-select v-model="editData.categoryId" style="width: 100%;" filterable placeholder="请选择">
                                <el-option 
                                    v-for="item in CategoryData"
                                    :key="item.categoryId"
                                    :label="item.categoryName"
                                    :value="item.categoryId"
                                    >
                                </el-option>
                            </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="er" >
                        <el-col :span="11" :offset="1">
                            <el-form-item label="货币类型" prop="currencyId">
                                <el-select v-model="editData.currencyId" style="width: 100%;" filterable placeholder="请选择">
                                <el-option 
                                    v-for="item in CurrencyDate"
                                    :key="item.currencyId"
                                    :label="item.currencyName"
                                    :value="item.currencyId"
                                    >
                                </el-option>
                            </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="成本" prop="cost">
                                <el-input v-model="editData.cost" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="er" >
                        <el-col :span="11" :offset="1">
                            <el-form-item label="市值" prop="marketValue">
                                <el-input v-model="editData.marketValue" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="收益" prop="profit">
                                <el-input v-model="editData.profit" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="er">
                        <el-col :span="11" :offset="1">
                            <el-form-item label="资产金额" prop="amount">
                                <el-input v-model="editData.amount" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </span>
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
import { getAssetsList,getAssetCategoryList,addAsset,getCurrencyList,updateAsset } from '@/api/asset'
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
        openAddWindos(){
            getCurrencyList().then(response=>{
                console.log(response)
                console.log(this.CurrencyDate)
                this.CurrencyDate = response.msg
                console.log(this.CurrencyDate)
            })
            this.windos.addWindos = true
        },
        tableAdd(addData,tableName){
            console.log(addData)
            this.$refs[tableName].validate((valid) => {
                if (valid) {
                    addAsset(addData).then(rep=>{
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
                    getCurrencyList().then(response=>{
                        console.log(response)
                        console.log(this.CurrencyDate)
                        this.CurrencyDate = response.msg
                        console.log(this.CurrencyDate)
                    })
                    this.windos.editWindos = true;
                    this.editData = row
                }else if(flag == 2){
                    console.log(this.editData);
                    updateAsset(this.editData).then(response=>{
                        console.log(response)
                        this.windos.editWindos = false;
                        this.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                    })
                }
                
            }
        },
        submitInput(){
            console.log(this.CategoryID)
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
<<<<<<< HEAD
                userId: 1,
                categoryId: '',
                date: '',
                index: 1,
                size: 10
            },
            installDate:{
                userID: 1,
                assetName:'',
                categoryId:'',
                amount:'',
                currencyId:'',
=======
                UserID: 1,
                CategoryID: '',
                date: '',
                index: 0,
                size: 10
            },
            installDate:{
                userId: 1,
                assetName:'',
                categoryId:'',
                amount:'',
                currency:'',
>>>>>>> 39f069fb42d3a3a2a2c649dc09c9a61e547343b7
                marketValue:'',
                cost:'',
                profit:''
            },
            tableData: [],
            CategoryData:[],
            CurrencyDate:[]
        }
    }
}
</script>

  
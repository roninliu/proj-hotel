<?php
namespace SDK\Service;
use Think\Model;
class EmployeService extends Model {
	/**
	 * [login description]
	 * @param  [type] $user [description]
	 * @return [type]       [description]
	 */
	public function login($user){
		$employeModel = M("Employe");
		$loginUser = $employeModel -> where("username = '".$user["username"]."'") ->select();
		if($loginUser != null){
			$flag = false;
			$succesUser = null;
			foreach ($loginUser as $tempUser) {
				if($user["password"] == $tempUser["password"]){
					$succesUser = $tempUser;
					$flag = true;
					break;	
				}else{
					$flag = false;
				}
			}
			if($flag){
				session("id",$succesUser["id"]);
				session("name",$succesUser["username"]);
				$result = array(
					'data'=> $succesUser,
					'msg' => "登录成功!", 
					'type'=> true
				);
				return $result;
			}else{
				$result = array(
					'msg' => "密码错误!", 
					'type'=> false
				);
				return $result;
			}
		}else{
			$result = array(
				'msg' => "用户不存在!", 
				'type'=> false
			);
			return $result;
		}
	}
	/**
	 * [findEmploye description]
	 * @param  [type] $map [description]
	 * @return [type]      [description]
	 */
	public function findEmploye($map){
		$employeModel = M("Employe");
		$sqlnum = "";
		$count = 0;
		$sql = "SELECT e.id,e.username,e.email,e.employe_id,e.nick_name,e.enable,d.name,d.number FROM department AS d,employe AS e WHERE d.id = e.department AND e.enable = 1";
		if($map["sSearch"] != ""){
			$sql = $sql . " AND e.nick_name LIKE '%".$map["sSearch"]."%'";
		}
		$sqlnum = $sql;
		$sql = $sql." ORDER BY e.id DESC  LIMIT ".$map["iDisplayStart"].",".$map["iDisplayLength"];
		if($map["sSearch"] != ""){
			$count = count($employeModel -> query($sqlnum));
		}else{
			$count = $employeModel -> count("id");
		}		
		$employes = $employeModel -> query($sql);		
		$result = array(
			"sEcho" => $map["sEcho"],
			"iTotalRecords" => $count,
			"aaData" => $employes,
			"iTotalDisplayRecords" => $count
		);
		return  $result;
	}
}
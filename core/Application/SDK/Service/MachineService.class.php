<?php
namespace SDK\Service;
use Think\Model;

class MachineService extends Model {

	/**
	 * [findMachine description]
	 * @param  [type] $map [description]
	 * @return [type]      [description]
	 */
	public function findMachine($map) {
		$machineModel = M("Machine");
		$sqlnum = "";
		$count = 0;
		$sql = "SELECT * FROM machine";
		if ($map["sSearch"] != "") {
			$sql = $sql . " WHERE name LIKE '%" . $map["sSearch"] . "%'";
		}
		$sqlnum = $sql;
		$sql = $sql . " ORDER BY id DESC  LIMIT " . $map["iDisplayStart"] . "," . $map["iDisplayLength"];
		if ($map["sSearch"] != "") {
			$count = count($machineModel->query($sqlnum));
		} else {
			$count = $machineModel->count("id");
		}
		$machines = $machineModel->query($sql);
		foreach ($machines as $key => $item) {
			if ($item["enable"] == 0) {
				$machines[$key]["enable"] = "离线";
			} else {
				$machines[$key]["enable"] = "在线";
			}
		}
		$result = array(
			"sEcho" => $map["sEcho"],
			"iTotalRecords" => $count,
			"aaData" => $machines,
			"iTotalDisplayRecords" => $count,
		);
		return $result;
	}

	/**
	 * [addMachine description]
	 * @param [type] $map [description]
	 */
	public function addMachine($map) {
		$machineModel = M("Machine");
		$result = $machineModel->add($map);
		if ($result === false) {
			return false;
		} else {
			return true;
		}
	}
	/**
	 * [deleteMachine description]
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function deleteMachine($id) {
		$machineModel = M("Machine");
		$result = $machineModel->where("id=" . $id)->delete();
		if ($result === false) {
			return false;
		} else {
			return true;
		}
	}
	/**
	 * [updateMachine description]
	 * @param  [type] $map [description]
	 * @return [type]      [description]
	 */
	public function updateMachine($map) {
		$machineModel = M("Machine");
		$result = $machineModel->where("id=" . $map['id'])->save($map);
		if ($result === false) {
			return false;
		} else {
			return true;
		}
	}
}

<?php
namespace SDK\Service;
use Think\Model;

class DepartmentService extends Model {
	/**
	 * [findDepHandler description]
	 * @return [type] [description]
	 */
	public function findDepHandler() {
		$departModel = M("Department");
		$result = $departModel->select();
		return $result;
	}
}

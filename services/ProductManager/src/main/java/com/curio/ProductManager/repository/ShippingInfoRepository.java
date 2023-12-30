package com.curio.ProductManager.repository;

import com.curio.ProductManager.entity.ShippingInfo;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingInfoRepository extends CrudRepository<ShippingInfo, Long>,
                                                JpaSpecificationExecutor<ShippingInfo> {
}
